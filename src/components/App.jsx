import React from 'react';
import '../CSS/index.css';
import SearchForm from './searchForm';
import Weather from './currentWeather';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      weatherInfo: [],
      error: false,
      loaded: false,
    }
  }
  getWeather = e => {
    e.preventDefault();
    document.querySelector('.welcome-container').classList.remove('fade-in');
    document.querySelector('.welcome-container').classList.add('fade-out');
    document.querySelector('form h1').classList.add('textFadeOut');
    setTimeout(() => {
      document.querySelector('.logo').classList.add('textFadeIn');
    }, 1500);

    const searchedLocation = e.target.elements.search.value;

      const APIkey = '66d6dd5057b73752a0babdd3bf02100d';
      
      const weather = `https://api.openweathermap.org/data/2.5/weather?q=${searchedLocation}&APPID=${APIkey}&units=metric`;
      const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${searchedLocation}&APPID=${APIkey}&units=metric`;
      Promise.all([fetch(weather), fetch(forecast)])
      .then(([res1, res2]) => {
        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()]);
        }
        throw Error(res1.statusText, res2.statusText);
      })
      .then(([data1, data2]) => {

        const date = new Date(data1.dt * 1000).toLocaleString("en-EN", {weekday: "long"}) + " " +  new Date(data1.dt * 1000).toLocaleString("en-US", {day: "numeric"}) + " " + new Date(data1.dt * 1000).toLocaleString("en-EN", {month: "long"})
        const sunset = new Date(data1.sys.sunset * 1000).toLocaleString("en-US", {hour : "numeric", minute: "numeric"});
        const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleString("en-US", {hour : "numeric", minute: "numeric"});

        const weatherData = {
          city: data1.name,
          country: data1.sys.country,
          date,
          icon: data1.weather[0].icon,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          sunset,
          sunrise,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
          forecast: data2.list,
        };
        this.setState({
          weatherInfo:weatherData,
          error: false,
          loaded: true,
        });

      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: true,
          loaded: false,
          weatherInfo: null,
        });

      });
  }
  render() {
    
      return(
          <div className="app">
            <h1 className="logo">Forecu Weather</h1>
              <SearchForm loadWeather={this.getWeather}/>
              {this.state.loaded === true && <Weather weather={this.state.weatherInfo} />}
          </div>
      )
  };
}

export default App;
