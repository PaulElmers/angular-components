import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html'
})
export class CustomSelectComponent {
  @Input() options: string[];
  @Output() selectionChange = new EventEmitter<string>();

  selectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.selectForm = this.fb.group({
      option: ['', Validators.required]
    });
  }

  onSelectionChange() {
    if (this.selectForm.valid) {
      this.selectionChange.emit(this.selectForm.value.option);
    }
  }
}
