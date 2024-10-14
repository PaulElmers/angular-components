import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent {
  @Input() currentRating: number;
  @Output() ratingUpdated = new EventEmitter<number>();

  ratingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ratingForm = this.fb.group({
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  onSubmit() {
    if (this.ratingForm.valid) {
      this.ratingUpdated.emit(this.ratingForm.value.rating);
    }
  }
}
