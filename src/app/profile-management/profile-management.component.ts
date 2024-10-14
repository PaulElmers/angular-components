import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-manager',
  templateUrl: './profile-manager.component.html'
})
export class ProfileManagerComponent {
  @Input() userProfile: any;
  @Output() profileUpdated = new EventEmitter<any>();

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      avatar: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.profileUpdated.emit(this.profileForm.value);
    }
  }

  onAvatarChange(event) {
    const file = event.target.files[0];
    if (file) {
      this.profileForm.patchValue({ avatar: file });
    }
  }
}
