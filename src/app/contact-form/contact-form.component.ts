import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {
  @Input() initialData: any;
  @Output() formSubmitted = new EventEmitter<any>();

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnChanges() {
    if (this.initialData) {
      this.contactForm.patchValue(this.initialData);
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.formSubmitted.emit(this.contactForm.value);
    }
  }
}
