import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import './weekly-temp.css';

// Chart Component
const Temp = ({ data }) => {
  const dataParse = data;

  const aggregatedData = {};
  dataParse.forEach((item) => {
    const day = getDayOfWeek(item.dt_txt);
    if (!aggregatedData[day]) {
      aggregatedData[day] = { count: 0, totalTemp: 0 };
    }
    aggregatedData[day].count += 1;
    aggregatedData[day].totalTemp += item.main.temp;
  });

  const chartData = Object.keys(aggregatedData).map((day) => ({
    day,
    temperature: aggregatedData[day].totalTemp / aggregatedData[day].count,
  }));

  function getDayOfWeek(dateString) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(dateString);
    return daysOfWeek[date.getDay()];
  }

  const [chartOptions, setChartOptions] = useState({
    title: "Weekly Temp",
    data: chartData,
    axes: [{ type: 'ordinal', position: 'bottom', tick: { count: 7 } }, { type: 'number', position: 'right' }],
  });
  return (
    <ResponsiveContainer className='vis'>
      <AreaChart data={chartOptions.data}>
        <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        </defs>
        <XAxis dataKey="day" type="category" strokeWidth={'2'} stroke="black"/>
        <YAxis strokeWidth={'2'} stroke="black"/>
        <Tooltip />
        <Area type="monotone" dataKey="temperature" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Temp;

