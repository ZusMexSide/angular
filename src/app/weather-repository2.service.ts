import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { WheaterDataSourceService } from './wheater-data-source.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherRepository2Service {
  weather: Weather[] = [];
  constructor(private weatherData: WheaterDataSourceService) { }
  getWeather(la?: string, lng?: string){
    this.weatherData.getWeather(la, lng)
    .subscribe((response) => {
      return this.weather = response.daily.data;
    });
  }
}
