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
  icon:any = "10d"; 
  status:string;
  description:string;
  clouds:number;

  constructor(private getWeatherService:GetWeatherService) {}

  ngOnInit() {    
    this.getWeatherService.getWeather("Misto Kyyiv").subscribe((data:any) => {
      this.weather = data;
      this.temp = (data.main.temp - 273.15).toFixed(2);
      this.pressure = data.main.pressure;
      this.humidity = data.main.humidity;
      this.wind_speed = data.wind.speed;
      this.wind_dec = data.wind.deg;
      this.city = data.name;
      this.icon = data.weather[0].icon;
      this.status = data.weather[0].main;
      this.description = data.weather[0].description;
      this.clouds = data.clouds.all;
      //console.log(this.weather);      
      //console.log(this.icon);
    });
  }

  getCurrentWeather(city:string) {
    this.getWeatherService.getWeather(city).subscribe((data:any) => {
      this.weather = data;
      this.temp = (data.main.temp -273.15).toFixed(2);
      this.pressure = data.main.pressure;
      this.humidity = data.main.humidity;
      this.wind_speed = data.wind.speed;
      this.wind_dec = data.wind.deg;
      this.city = data.name;
      this.icon = data.weather[0].icon;
      this.status = data.weather[0].main;
      this.description = data.weather[0].description;
      this.clouds = data.clouds.all;
      //console.log(this.weather);     
      //console.log(this.icon);
    });
  }

  getActiveClass(id:string) {
    if (id === this.activeId) {
      return "btn btn-secondary active";
    } else {
      return "btn btn-secondary";
    }
  }
  
}
