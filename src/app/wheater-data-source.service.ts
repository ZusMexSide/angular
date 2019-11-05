import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WheaterDataSourceService {

  constructor(private http: HttpClient) { }
  proxy = 'https://cors-anywhere.herokuapp.com/';
  getWeather(lt: string = '37.8267', lng: string = '122.4233'): any {
    return this.http.get(`${this.proxy}https://api.darksky.net/forecast/dc8a7d2f84439e3c1d3c6ba4b8e40121/${lt},${lng}`);
  }
  // constructor(private http: HttpClient) { }
  // getWeather():any{var proxy='https://cors-anywhere.herokuapp.com/';
  //   return this.http.get(proxy+'https://api.darksky.net/forecast/dc8a7d2f84439e3c1d3c6ba4b8e40121/37.8267,-122.4233?exclude=currently,hourly,minutely,alerts,flags?lang=es');
  // }
}
