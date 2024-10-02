import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Message } from '../../models/message.models';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss',
})
export class TemplateFormComponent {
  message: Message = {
    lastname: '',
    firstname: '',
    email: '',
    content: '',
  };

  submitted: boolean = false;
  formSubmittedWithSuccess: boolean = false;
  timeoutFn: ReturnType<typeof setTimeout> | null = null;

  onReset(form: NgForm): void {
    this.submitted = false;
    this.formSubmittedWithSuccess = false;
    this.message = {
      lastname: '',
      firstname: '',
      email: '',
      content: '',
    };
    
    if (this.timeoutFn) {
      clearTimeout(this.timeoutFn);
      this.timeoutFn = null;
    }
    form.resetForm();
    console.log('Form reset');
  }

  onSubmit(form: NgForm): void {

    console.log('form.valid', form.valid);
    this.submitted = true;
    
    if (form.valid) {
      this.formSubmittedWithSuccess = true;
      this.timeoutFn = setTimeout(() => {
        this.onReset(form);
      }, 3000);
      console.log('Form submitted', this.message, this.formSubmittedWithSuccess);
    }


  }
}
