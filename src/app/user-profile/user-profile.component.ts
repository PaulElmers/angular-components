import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent {
  @Input() userData: any;
  @Output() userUpdated = new EventEmitter<any>();

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnChanges() {
    if (this.userData) {
      this.profileForm.patchValue(this.userData);
    }
  }

  onSave() {
    if (this.profileForm.valid) {
      this.userUpdated.emit(this.profileForm.value);
    }
  }
}
