import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PickviewerComponent } from "./pickviewer/pickviewer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PickviewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularProjet';
}
