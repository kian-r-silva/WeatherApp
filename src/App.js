import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './components/search/search';
import Forecast from './components/forcast/forecast';
import CurrentWeather from './components/current-weather/current-weather';
import Temp from './components/charts/weekly-temp';
import AboutPage from './components/pages/AboutPage';
import InformationPage from './components/pages/InformationPage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from './store';



function HomePage() {
  const dispatch = useDispatch();
  const currentWeather = useSelector((state) => state.currentWeather.data);
  const forecastWeather = useSelector((state) => state.forecastWeather.data);
  const chartData = useSelector((state) => state.chartData.data);

  const handleOnSearchChange = (searchData) => {
    dispatch(fetchWeatherData(searchData))
  }

  return (
    <div className='weather'>
      <div className='search'>
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className='main-weather' hidden={null == currentWeather}>
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>
      <div className='temp-chart' hidden={null == chartData}>
        {chartData && <Temp data={chartData} />}
      </div>
        {forecastWeather && <div className='main-forecast' hidden={!forecastWeather || forecastWeather.length === 0}>
          <Forecast data={forecastWeather}/></div>}
    </div>
  );
}

function App(){
  return (
    <Router>
      <div className="app-container">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/information">Information</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/information" element={<InformationPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;