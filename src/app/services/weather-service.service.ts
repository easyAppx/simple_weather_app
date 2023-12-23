import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // getWeatherData(cityName: string): Observable<WeatherData> {
  //   const apiUrl = `${environment.weatherApiBaseUrl}${cityName}`;

  //   return this.http.get<WeatherData>(apiUrl, {
  //     headers: new HttpHeaders()
  //       .set(environment.APIHostHeaderName, environment.APIHostHeaderValue)
  //       .set(environment.APIKeyHeaderName, environment.APIKeyHeaderValue),

  //     params: new HttpParams()
  //       .set('q', cityName)
  //       .set('unitGroup', 'metric')
  //       .set('mode', 'json')
  //       .set('language', 'en')
  //   });
  // }

  getWeatherData(cityName: string): Observable<WeatherData> {
    const params = new HttpParams()
      .set('q', cityName)
      .set('units', 'imperial')
      .set('appid', environment.apiKey)
      .set('language', 'en');

    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, { params });
  }
}
