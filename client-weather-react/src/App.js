import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      temp: "",
      pressure: "",
      humidity: "",
      wind_speed: "",
      wind_dec: "",
      city: "",
      activeId: "",
      icon: "10d",
      status: "",
      description: "",
      clouds: ""
    }

    this.getWeather = this.getWeather.bind(this);   

  }

  componentDidMount() {
    this.getWeather("Misto Kyyiv");
    this.setState({
      activeId: "Misto Kyyiv"
    });
  }

  getWeatherKyiv(){
    this.getWeather("Misto Kyyiv");
    this.setState({
      activeId: "Misto Kyyiv"
    });
  }

   getWeatherLutsk(){
    this.getWeather("Lutsk");
    this.setState({
      activeId: "Lutsk"
    });
  }


  getWeatherLondon(){
    this.getWeather("London");
    this.setState({
      activeId: "London"
    });
  }

  getWeatherNy(){
    this.getWeather("New York");
    this.setState({
      activeId: "New York"
    });    
  }  

   getWeatherSy(){
    this.getWeather("Sydney");
    this.setState({
      activeId: "Sydney"
    });    
  }  
  
  getWeather(city) {
    let key = "c2dcf8ffb5cdc3f8977bfd2ae7ea4738";    
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&?units=metric&APPID=" + key;
    axios
    .get("https://cors-anywhere.herokuapp.com/" + url)
    .then((response) => {
      //console.log(response.data);
      this.setState({
        temp: (response.data.main.temp - 273.15).toFixed(2),
        pressure: response.data.main.pressure,
        humidity: response.data.main.humidity,
        wind_speed: response.data.wind.speed,
        wind_dec: response.data.wind.deg,
        city: response.data.name,
        icon: response.data.weather[0].icon,
        status: response.data.weather[0].main,
        description: response.data.weather[0].description,
        clouds: response.data.clouds.all
      });      
    })
    .catch((error) => {
      console.log(error.statusText);
    });    
  } 

  render(){
    return (
      <div className="App">
        <div className="container">
          <p>Api info:</p>
          <ul>
            <li>Docs:
              <a href="https://openweathermap.org/current" rel="noopener noreferrer" target="_blank"> https://openweathermap.org/current</a>
            </li>
            <li>Api key:
              <span className="text-primary"> c2dcf8ffb5cdc3f8977bfd2ae7ea4738</span>
            </li>
          </ul>
          <hr />      
        </div>

        <div className="container">
      <h1>Weather App</h1>
      <h5><strong>React.js</strong> framework was used to build this website</h5>        
      <div className="btn-group" role="group">
        <button type="button" className={this.state.activeId === 'Misto Kyyiv' ? 'btn btn-secondary active' : 'btn btn-secondary'} onClick={ this.getWeatherKyiv.bind(this) }>Kyiv</button>
        <button type="button" className={this.state.activeId === 'Lutsk' ? 'btn btn-secondary active' : 'btn btn-secondary'} onClick={ this.getWeatherLutsk.bind(this) }>Lutsk</button>
        <button type="button" className={this.state.activeId === 'London' ? 'btn btn-secondary active' : 'btn btn-secondary'} onClick={ this.getWeatherLondon.bind(this) }>London</button>
        <button type="button" className={this.state.activeId === 'New York' ? 'btn btn-secondary active' : 'btn btn-secondary'} onClick={ this.getWeatherNy.bind(this) }>New York</button>
        <button type="button" className={this.state.activeId === 'Sydney' ? 'btn btn-secondary active' : 'btn btn-secondary'} onClick={ this.getWeatherSy.bind(this) }>Sydney</button>
      </div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">{ this.state.city }</th> 
            <th><img id="wicon" src={`https://openweathermap.org/img/wn/${this.state.icon}.png`} alt="Weather icon" /></th>          
          </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">Current status</th>
            <td>{ this.state.status }</td>         
          </tr>
          <tr>
            <th scope="row">Detailed status</th>
            <td>{ this.state.description }</td>         
          </tr>
          <tr>
            <th scope="row">Cloudiness</th>
            <td>{ this.state.clouds } %</td>         
          </tr>
          <tr>
            <th scope="row">Temperature</th>
            <td>{ this.state.temp } °C</td>         
          </tr>
          <tr>
            <th scope="row">Atmospheric pressure</th>
            <td>{ this.state.pressure } hPa</td>         
          </tr>
          <tr>
            <th scope="row">Humidity</th>
            <td>{ this.state.humidity } %</td>          
          </tr>
          <tr>
            <th scope="row">Wind speed</th>
            <td>{ this.state.wind_speed } m/s</td>          
          </tr>
          <tr>
            <th scope="row">Wind direction</th>
            <td>{ this.state.wind_dec } °</td>          
          </tr>
        </tbody>
      </table>      
    </div>

      </div>
    )   
  }
}

export default App;
