import React from 'react';
import '../CSS/index.css';


const Weather = ({weather}) => {
    let weatherIcon = null;

    if (weather.main === 'Thunderstorm') {
        weatherIcon = <i className="fa fa-bolt"></i>
      } else if (weather.main === 'Drizzle') {
        weatherIcon = <i className="fas fa-cloud-rain"></i>
      } else if (weather.main === 'Rain') {
        weatherIcon = <i className="fa fa-cloud-showers-heavy"></i>
      } else if (weather.main === 'Snow') {
        weatherIcon = <i className="fa fa-snowflake"></i>
      } else if (weather.main === 'Clear') {
        weatherIcon = <i className="far fa-sun"></i>
      } else if (weather.main === 'Clouds') {
        weatherIcon = <i className="fa fa-cloud"></i>
      } else {
        weatherIcon = <i className="fa fa-smog"></i>
      }
     
    return(
        <div className="current-weather-container">
            <div className="location">{weather.city},{weather.country}</div>
            <div className="current-date">{weather.date}</div>
            <div className="main-info">
                <div className="current-info">
                    <div className="weather-icon">
                        {weatherIcon}
                    </div>
                    <div className="temp-info">
                        <div>{Math.floor(weather.temp) + "°"}</div>
                        <div>{weather.description}</div>
                    </div>
                </div>
                <div className="other-info">
                    <div className="part">
                        <div>{Math.round(weather.highestTemp) + " °"}<span>High</span></div>
                        <div>{weather.wind + " mph"}<span>Wind</span></div>
                        <div>{weather.sunrise}<span>Sunrise</span></div>
                    </div>
                    <div className="part">
                        <div>{Math.round(weather.lowestTemp) + " °"}<span>Low</span></div>
                        <div>{weather.humidity + " %"}<span>Rain</span></div>
                        <div>{weather.sunset}<span>Sunset</span></div>
                    </div>
                </div>
            </div>
                <h1 className="forecast-head">Forecast</h1>
            <div className="hourly-forecast">
                {weather.forecast.map(hours => (
                    <div className="hour-box" key={Math.random()}>
                        <div className="date-box">
                            <div className="day-date">
                                {new Date(hours.dt * 1000).toLocaleString("en-US", {weekday: "long"})}, {new Date(hours.dt * 1000).toLocaleString("en-US", {day: "numeric"})}
                            </div>
                            <div className="hour-date">
                                {new Date(hours.dt * 1000).toLocaleString("ro-RO", {hour: "numeric", minute: "numeric"})}
                            </div>
                        </div>
                        <img src={`https://openweathermap.org/img/wn/${hours.weather[0].icon}@2x.png`} alt="icon"/>
                        <div className="description">
                            {hours.weather[0].main}
                        </div>
                        <div className="temp">
                            {Math.round(hours.main.temp) + " °"}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Weather;