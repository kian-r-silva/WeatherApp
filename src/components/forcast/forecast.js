// import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css'
const WEEK_DAY = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug','Sept','Oct','Nov','Dec']


const Forecast = ({ data }) => {

    const date = new Date().getDate()
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAY.slice(dayInAWeek, WEEK_DAY.length).concat(WEEK_DAY.slice(0, dayInAWeek))
    console.log("forecast data", data)
    
    return (
        <>
            {data.slice(0, 7).map((item, idx) => (
                <div className="daily-item" key={idx}>
                    <img alt="weather icon" src={`icons/${item.weather[0].icon}.png`} />
                    <span className="day">{forecastDays[idx]}, {MONTH[item.dt_txt.split('-')[1]-1]} {date+idx+1} </span>
                    <span className="description">{item.weather[0].description}</span>
                    <span className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</span>
                </div>  
                ))}
            <div className='month-item'>Month forecast</div>
        </>);
}

export default Forecast;