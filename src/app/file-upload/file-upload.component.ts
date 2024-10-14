import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent {
  @Output() fileUploaded = new EventEmitter<File>();

  uploadForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      file: [null, [Validators.required, this.fileSizeValidator, this.fileTypeValidator]]
    });
  }

  fileSizeValidator(control) {
    const file = control.value;
    return file && file.size > 5000000 ? { sizeExceeded: true } : null;
  }

  fileTypeValidator(control) {
    const file = control.value;
    return file && !file.type.match(/image\/*/) ? { invalidType: true } : null;
  }

  onFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      this.uploadForm.patchValue({ file: file });
    }
  }

  onSubmit() {
    if (this.uploadForm.valid) {
      this.fileUploaded.emit(this.uploadForm.get('file').value);
    }
  }
}
