import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
})
export class SignUpFormComponent {
  submitted: boolean = false;
  formSubmittedWithSuccess: boolean = false;
  timeoutFn: ReturnType<typeof setTimeout> | null = null;

  formBuilder = inject(FormBuilder);
  signUpForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    //formGroup imbriqué pour gérer validation confirmation dans le même objet
    passwords: this.formBuilder.group(
      {
        password: ['', [Validators.required, this.securePasswordValidator()]],
        confirmPassword: [''],
      },
      { validators: this.passwordMatchValidator() }
    ),
  });

  onReset(): void {
    this.submitted = false;
    this.formSubmittedWithSuccess = false;
    if (this.timeoutFn) {
      clearTimeout(this.timeoutFn);
      this.timeoutFn = null;
    }
    this.signUpForm.reset();
    console.log('Form reset');
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.signUpForm.valid) {
      this.formSubmittedWithSuccess = true;
      console.log('Form submitted', this.signUpForm.value);
      this.timeoutFn = setTimeout(() => {
        this.onReset();
      }, 3000);
    } else {
      console.log('Form invalid');
    }
  }

  securePasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value || '';

      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const isValidLength = value.length >= 12;

      const passwordValid =
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialChar &&
        isValidLength;

      return passwordValid ? null : { securePassword: true };
    };
  }

  passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordsMismatch: true };
    };
  }
}
