import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	weather: [],
    temp: "",
    pressure: "",
    humidity: "",
    wind_speed: "",
    wind_dec: ""
  },
  mutations: {
  	SetWeather(state,  weather , temp) {
      state.weather = weather;
      state.temp = weather[0]; 
      state.pressure = weather[1];
      state.humidity = weather[2];
      state.wind_speed = weather[3],
      state.wind_dec = weather[4]
  	}
  },
  actions: {
  	FetchWeather({ commit }) {
  		axios
  		.get("https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?q=London=139&appid=c2dcf8ffb5cdc3f8977bfd2ae7ea4738")
  		.then((response) => {
  			commit("SetWeather", [response.data.main.temp, 
                              response.data.main.pressure,
                              response.data.main.humidity,
                              response.data.wind.speed,
                              response.data.wind.deg
                              ]);
  				// response.data.main.temp,
  				// response.data.main.pressure,
  				// response.data.main.humidity,
  				// response.data.wind.speed,
  				// response.data.wind.deg
  				
  			console.log(response.data);
  			console.log(this.state.weather);
        console.log(this.state.temp);
        console.log(this.state.wind_dec);
  		})
  		.catch((error) => {
  			console.log(error.statusText);
  		})
  	}
  },
  getters: {
  	getWeather(state) {
  		return state.weather;
  	},
    getTemp(state) {
      return state.temp;
    }
  }
})
