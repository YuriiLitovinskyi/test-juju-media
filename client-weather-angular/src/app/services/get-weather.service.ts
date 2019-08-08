import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';


@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  

  constructor(private http: HttpClient) { }

  //Get Weather
  getWeather(city:string):Observable<Weather> {
    let key = "c2dcf8ffb5cdc3f8977bfd2ae7ea4738";    
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&?units=metric&APPID=" + key;
    return this.http.get<Weather>(url);
  }
  
}
