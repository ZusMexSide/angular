import { Component, OnInit } from '@angular/core';
import { WheaterRepositoryService } from '../wheater-repository.service';
import { FormBuilder } from '@angular/forms';
import { Weather } from '../weather';
import { WeatherRepository2Service } from '../weather-repository2.service';
import { WheaterDataSourceService } from '../wheater-data-source.service';
import { Map, latLng, tileLayer, Layer, marker, circle, polygon, Icon } from 'leaflet';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  now: number;
  place: any;
  weather: Weather[] = [];
  map: Map;
  myIcon: Icon;
  latit: any;
  long: any;
  constructor(
    private weatherRepo: WeatherRepository2Service,
    private weatherData: WheaterDataSourceService,
    private formC: FormBuilder) {
    this.place = this.formC.group({
      latitude: '',
      longitude: ''
    });
   }

  ngOnInit() {
    this.now = Math.floor(new Date().getTime());
    this.loadWeather(this.place);
    this.leafletMap();
    }
    search(place) {
      console.log(place);
      this.loadWeather(place);
    }
    onSubmit(place) {
      console.log(place);
    }
    loadWeather(place) {
      this.weatherData.getWeather(place.latitude, place.longitude)
      .subscribe((response) => {
        this.weather = response.daily.data;
      });
    }
    loadWithMap(lat, lon) {
      this.latit = document.getElementById('latitude');
      this.latit.value = lat;
      this.long = document.getElementById('longitude');
      this.long.value = lon;
      this.weatherData.getWeather(lat, lon)
      .subscribe((response) => {
        this.weather = response.daily.data;
      });
    }
    leafletMap() {
      // In setView add latLng and zoom
      this.map = new Map('mapId').setView([18.4625, -97.3928], 15);
      this.myIcon = new Icon({
        iconUrl: '../../assets/ViejoLesbiano.png',
        shadowUrl: '../../assets/img1.png',
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
      // tslint:disable-next-line: max-line-length
      tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoienVzbWV4c2lkZSIsImEiOiJjazE1Y3lnZzcwaGl1M25tcjhla2M1ODViIn0.Un1T3BirVk8RH-hVSW8Q9Q', {
        // tslint:disable-next-line: max-line-length
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoienVzbWV4c2lkZSIsImEiOiJjazE1Y3lnZzcwaGl1M25tcjhla2M1ODViIn0.Un1T3BirVk8RH-hVSW8Q9Q'
      }).addTo(this.map);

      this.map.on('click', (e) => {
        console.log(e.latlng);
        this.loadWithMap(e.latlng.lat , e.latlng.lng),
        marker([e.latlng.lat , e.latlng.lng],
                {icon: this.myIcon})
        .addTo(this.map)
        .bindPopup('You clicked in:' + e.latlng.lat + ' ' + e.latlng.lng)
        .openPopup();
      });
    }
  // get weather() {
  //   return this.WheaterRepository.getWeather();
  //     }
}
