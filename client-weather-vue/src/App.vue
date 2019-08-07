<template>
  <div id="app">
    <div class="container">
      <p>Api info:</p>
      <ul>
        <li>Docs:
          <a href="https://openweathermap.org/current" target="_blank">https://openweathermap.org/current</a>
        </li>
        <li>Api key:
          <span class="text-primary">c2dcf8ffb5cdc3f8977bfd2ae7ea4738</span>
        </li>
      </ul>
      <hr>      
    </div>
    
    <div class="container">
      <h1>Weather App</h1>
      <h5>Vue.js framework was used</h5>         
      <div class="btn-group" role="group">
        <button type="button" :class="getActiveClass('Misto Kyyiv')" v-on:click="getWeather('Misto Kyyiv'); activeId = 'Misto Kyyiv'">Kyiv</button>
        <button type="button" :class="getActiveClass('London')" v-on:click="getWeather('London'); activeId = 'London'" >London</button>
        <button type="button" :class="getActiveClass('New York')" v-on:click="getWeather('New York'); activeId = 'New York'">New York</button>
      </div>
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">{{ this.city }}</th> 
            <th></th>          
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Temperature</th>
            <td>{{ this.temp }} °C</td>         
          </tr>
          <tr>
            <th scope="row">Atmospheric pressure</th>
            <td>{{ this.pressure }} hPa</td>         
          </tr>
          <tr>
            <th scope="row">Humidity</th>
            <td>{{ this.humidity }} %</td>          
          </tr>
          <tr>
            <th scope="row">Wind speed</th>
            <td>{{ this.wind_speed }} m/s</td>          
          </tr>
          <tr>
            <th scope="row">Wind direction</th>
            <td>{{ this.wind_dec }} °</td>          
          </tr>
        </tbody>
      </table>      
    </div>  
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',  
  data: function() {
    return {      
       temp: "",
       pressure: "",
       humidity: "",
       wind_speed: "",
       wind_dec: "",
       city: "",       
       activeId: "Misto Kyyiv"
    }
  }, 
  methods: {
    getWeather(city) {      
      let key = "c2dcf8ffb5cdc3f8977bfd2ae7ea4738";    
      let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&?units=metric&APPID=" + key;
      axios
      .get("https://cors-anywhere.herokuapp.com/" + url)
      .then((response) => {
        this.temp = (response.data.main.temp - 273.15).toFixed(2);
        this.pressure = response.data.main.pressure;
        this.humidity = response.data.main.humidity;
        this.wind_speed = response.data.wind.speed;
        this.wind_dec = response.data.wind.deg; 
        this.city = response.data.name;     
        //console.log(response.data);   
      })
      .catch((error) => {
        console.log(error.statusText);
      })
    },
    getActiveClass(id) {
      if (id === this.activeId) {
        return "btn btn-secondary active";
      } else {
        return "btn btn-secondary";
      }
    },    
  },
   mounted() {
    this.getWeather("Misto Kyyiv");
  },
}
</script>


<style>

body {
  background-color: #f9f9f9 !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;
  margin-top: 20px;
}

h1 {
  padding-top: 32px;
}

.btn {
  margin: 15px 1px;
}

table tbody th, td {
  color: #2c3e50;
}
</style>
