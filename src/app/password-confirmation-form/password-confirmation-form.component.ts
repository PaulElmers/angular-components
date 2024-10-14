import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-confirmation-form',
  templateUrl: './password-confirmation-form.component.html'
})
export class PasswordConfirmationFormComponent {
  form: FormGroup;
  passwordMismatch: boolean = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  checkPasswords() {
    const password = this.form.get('password')?.value;
    const confirmPassword = this.form.get('confirmPassword')?.value;
    this.passwordMismatch = password !== confirmPassword;
  }

  onSubmit() {
    if (this.form.valid && !this.passwordMismatch) {
      console.log('Form submitted successfully:', this.form.value);
    } else {
      console.log('Form is invalid or passwords do not match');
    }
  }
}
