import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-fields-form',
  templateUrl: './dynamic-fields-form.component.html'
})
export class DynamicFieldsFormComponent {
  @Input() fieldConfig: any[] = [];
  @Output() formSubmitted = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnChanges() {
    if (this.fieldConfig.length) {
      this.createFormControls();
    }
  }

  createFormControls() {
    this.form = this.fb.group({});
    this.fieldConfig.forEach((field) => {
      const validators = field.required ? [Validators.required] : [];
      this.form.addControl(field.name, this.fb.control('', validators));
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmitted.emit(this.form.value);
    }
  }
}
