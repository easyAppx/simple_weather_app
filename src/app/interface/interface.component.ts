import { Component } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {
  weatherDetails = [
    { icon: 'assets/temp-min.png', label: 'min', value: '10°C' },
    { icon: 'assets/temp-max.png', label: 'max', value: '20°C' },
    { icon: 'assets/humidity.png', label: 'humidity', value: '77%' },
    { icon: 'assets/wind.png', label: 'wind', value: '11km/h' }
  ];
}
