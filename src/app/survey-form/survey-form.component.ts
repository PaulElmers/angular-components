import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html'
})
export class SurveyComponent {
  @Input() questions: string[];
  @Output() surveySubmitted = new EventEmitter<any>();

  surveyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.surveyForm = this.fb.group({
      answers: this.fb.array(this.questions.map(() => ['', Validators.required]))
    });
  }

  onSubmit() {
    if (this.surveyForm.valid) {
      this.surveySubmitted.emit(this.surveyForm.value);
    }
  }
}
