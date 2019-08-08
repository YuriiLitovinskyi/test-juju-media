import { Component, OnInit } from '@angular/core';
//import { Weather } from './models/weather';
import { GetWeatherService } from './services/get-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
  weather:any;
  temp:string;
  pressure:number;
  humidity:number;
  wind_speed:number;
  wind_dec:number;
  city:string;
  activeId:string = "Misto Kyyiv"; 

  constructor(private getWeatherService:GetWeatherService) {}

  ngOnInit() {    
    this.getWeatherService.getWeather("Misto Kyyiv").subscribe(weather => {
      this.weather = weather;
      this.temp = (weather.main.temp -273.15).toFixed(2);
      this.pressure = weather.main.pressure;
      this.humidity = weather.main.humidity;
      this.wind_speed = weather.wind.speed;
      this.wind_dec = weather.wind.deg;
      this.city = weather.name;
      console.log(this.weather);
      console.log(this.temp);
    });
  }

  getCurrentWeather(city:string) {
    this.getWeatherService.getWeather(city).subscribe(weather => {
      this.weather = weather;
      this.temp = (weather.main.temp -273.15).toFixed(2);
      this.pressure = weather.main.pressure;
      this.humidity = weather.main.humidity;
      this.wind_speed = weather.wind.speed;
      this.wind_dec = weather.wind.deg;
      this.city = weather.name;
      console.log(this.weather);
      console.log(this.temp);
    });
  }

  getActiveClass(id) {
    if (id === this.activeId) {
      return "btn btn-secondary active";
    } else {
      return "btn btn-secondary";
    }
  }
  
}
