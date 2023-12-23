import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather-service.service';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather-model';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})

export class InterfaceComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  weatherData?: WeatherData;

  get weatherDetails(): any[] {
    return [
      { icon: 'assets/temp-min.png', label: 'min', value: Math.floor(this.weatherData?.main.temp_min || 0) + '°C' },
      { icon: 'assets/temp-max.png', label: 'max', value: Math.floor(this.weatherData?.main.temp_max || 0) + '°C' },
      { icon: 'assets/humidity.png', label: 'humidity', value: this.weatherData?.main.humidity + '%' },
      { icon: 'assets/pressure.png', label: 'pressure', value: this.weatherData?.main.pressure + 'mb' },
      { icon: 'assets/clouds.png', label: 'clouds', value: this.weatherData?.clouds.all + '%' },
      { icon: 'assets/wind.png', label: 'wind', value: Math.floor(this.weatherData?.wind.speed || 0) + 'km/h' },
      { icon: 'assets/sunrise.png', label: 'Sunrise', value: this.getFormattedTime(this.weatherData?.sys.sunrise ?? 0)},
      { icon: 'assets/sunset.png', label: 'Sunset', value: this.getFormattedTime(this.weatherData?.sys.sunset ?? 0)},
    ];
  }

  //fetch weather api

  cityName: string = environment.defaultCity;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(): void {
    if (this.cityName.trim() !== '') {
      this.getWeatherData(this.cityName);
      this.cityName = '';
    }
  }

  private getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          console.log(response);
        },
        error: (error) => {
          console.error('API Request Error:', error);
        }
      });
  }

  //fetch date, time and lat & lon
  getLocalDate(): string {
    if (this.weatherData?.dt) {
      const utcTime = new Date(this.weatherData.dt * 1000);
      return utcTime.toDateString();
    } else {
      return 'Unknown Date';
    }
  }

  getLocalTime(): string {
    if (this.weatherData?.dt) {
      const utcTime = new Date(this.weatherData.dt * 1000); 
      return utcTime.toLocaleTimeString();
    }
    return ''
  }

  formatCoordinates(latitude: number, longitude: number): string {
    const latDirection = latitude >= 0 ? 'N' : 'S';
    const lonDirection = longitude >= 0 ? 'E' : 'W';
  
    const latDistance = this.calculateDistanceFromEquator(latitude);
    const lonDistance = this.calculateDistanceFromPrimeMeridian(longitude);
  
    return `${latDistance.toFixed(2)}${latDirection}: Lat ${lonDistance.toFixed(2)}${lonDirection}: Lon`;
  }
  
  calculateDistanceFromEquator(latitude: number): number {
    const equator = 0;
    return Math.abs(latitude - equator);
  }
  
  calculateDistanceFromPrimeMeridian(longitude: number): number {
    const primeMeridian = 0;
    return Math.abs(longitude - primeMeridian);
  }

  getFormattedTime(timestamp: number): string {
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

}
