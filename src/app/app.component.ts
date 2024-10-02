import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateFormComponent } from "./components/template-form/template-form.component";
import { SignUpFormComponent } from "./components/sign-up-form/sign-up-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateFormComponent, SignUpFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularProjet';
}
