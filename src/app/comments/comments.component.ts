import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent {
  @Input() comments: any[];
  @Output() commentAdded = new EventEmitter<string>();

  commentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    if (this.commentForm.valid) {
      this.commentAdded.emit(this.commentForm.value.text);
      this.commentForm.reset();
    }
  }
}
