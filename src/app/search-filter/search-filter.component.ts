import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html'
})
export class SearchFilterComponent {
  @Input() initialFilters: any;
  @Output() filtersUpdated = new EventEmitter<any>();

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: [''],
      category: ['']
    });
  }

  ngOnChanges() {
    if (this.initialFilters) {
      this.searchForm.patchValue(this.initialFilters);
    }
  }

  onFilterUpdate() {
    this.filtersUpdated.emit(this.searchForm.value);
  }
}
