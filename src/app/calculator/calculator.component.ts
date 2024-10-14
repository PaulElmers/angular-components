import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent {
  @Input() initialValues: any;
  @Output() calculationResult = new EventEmitter<number>();

  calcForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.calcForm = this.fb.group({
      value1: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      value2: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  onSubmit() {
    if (this.calcForm.valid) {
      const { value1, value2 } = this.calcForm.value;
      this.calculationResult.emit(Number(value1) + Number(value2));
    }
  }
}
