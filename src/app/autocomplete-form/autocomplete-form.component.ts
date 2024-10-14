import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete-form',
  templateUrl: './autocomplete-form.component.html'
})
export class AutocompleteFormComponent {
  @Output() suggestionsRequested = new EventEmitter<string>();

  searchForm: FormGroup;
  suggestions: string[] = [];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchTerm: ['']
    });

    this.searchForm.get('searchTerm').valueChanges.pipe(debounceTime(300)).subscribe(value => {
      this.suggestionsRequested.emit(value);
    });
  }

  onSuggestionClick(suggestion: string) {
    this.searchForm.patchValue({ searchTerm: suggestion });
  }
}
