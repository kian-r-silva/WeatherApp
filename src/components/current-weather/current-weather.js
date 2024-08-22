import "./current-weather.css";

const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug','Sept','Oct','Nov','Dec']

const CurrentWeather = ({ data }) => {
    const currentDay = new Date()
    const dayNum = currentDay.getDate()
    const month = currentDay.getMonth()

    return (
        <div className="cur-weather">
            <div className="top">
                <div>
                    <div className="city">{data.city} </div>
                    <div className="date">{MONTH[month]} {dayNum}</div>
                    <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
                    <p className="weather-description">{data.weather[0].description}</p>
                    <p className="temperature">{Math.round(data.main.temp)}°C</p>
                    <p className="feel-label">Feels like <span className="feel-value">{Math.round(data.main.feels_like)}°C</span> </p>
                </div>
            </div>
            <div className="bottom">
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Wind </span>
                        <span className="parameter-value">{Math.round(data.wind.speed)}m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity </span>
                        <span className="parameter-value">{Math.round(data.main.humidity)}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure </span>
                        <span className="parameter-value">{data.main.pressure} hPa</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Visibility </span>
                        <span className="parameter-value">{data.visibility} m</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;