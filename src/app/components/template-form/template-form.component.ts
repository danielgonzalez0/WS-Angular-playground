import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../models/message.models';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  message: Message = {
    lastname: '',
    firstname: '',
    email: '',
    content: ''
  };
  
  onReset(): void {
    console.log('Resetting form');
    
    this.message = {
      lastname: '',
      firstname: '',
      email: '',
      content: ''
    };
  }

  onSubmit(): void {
    console.log(this.message);
  }
}
