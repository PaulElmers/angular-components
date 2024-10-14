import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auto-validate-form',
  templateUrl: './auto-validate-form.component.html'
})
export class AutoValidateFormComponent {
  @Input() initialData: any;
  @Output() dataChanged = new EventEmitter<any>();

  autoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.autoForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required]
    });

    this.autoForm.valueChanges.subscribe(value => {
      if (this.autoForm.valid) {
        this.dataChanged.emit(value);
      }
    });
  }

  ngOnChanges() {
    if (this.initialData) {
      this.autoForm.patchValue(this.initialData);
    }
  }
}
