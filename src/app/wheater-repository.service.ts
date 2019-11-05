import { Injectable } from '@angular/core';
import { WheaterDataSourceService } from './wheater-data-source.service';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WheaterRepositoryService {
private weather: Weather[]=[];
  constructor(private wheatherDataSource: WheaterDataSourceService) {
    this.wheatherDataSource.getWeather()
    .subscribe((response) =>{
      this.weather=response.daily.data;
    })
   }
   getWeather(): Weather[]{
    return this.weather;
  }
}
