import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html'
})
export class OrderManagerComponent {
  @Input() orders: any[];
  @Output() orderUpdated = new EventEmitter<any>();

  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      status: ['']
    });
  }

  onStatusChange(orderId: number) {
    const updatedOrder = { id: orderId, status: this.orderForm.get('status').value };
    this.orderUpdated.emit(updatedOrder);
  }
}
