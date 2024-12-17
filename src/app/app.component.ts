import { Component } from '@angular/core';
import { ConversionComponent } from './conversion/conversion.component';
import { AverageTemperatureComponent } from "./average-temperature/average-temperature.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AverageTemperatureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AngularProjet';
}
