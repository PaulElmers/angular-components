import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  @Input() products: any[];
  @Output() filterChanged = new EventEmitter<any>();

  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      search: [''],
      category: ['']
    });
  }

  onFilter() {
    this.filterChanged.emit(this.filterForm.value);
  }
}
