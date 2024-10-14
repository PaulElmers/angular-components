import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html'
})
export class OrderFormComponent {
  @Input() products: any[];
  @Output() orderSubmitted = new EventEmitter<any>();

  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      product: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      delivery: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      this.orderSubmitted.emit(this.orderForm.value);
    }
  }
}
