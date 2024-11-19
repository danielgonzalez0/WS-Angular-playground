import { Component } from '@angular/core';
import { ConversionComponent } from './conversion/conversion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConversionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AngularProjet';
}
