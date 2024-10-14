import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-tabs',
  templateUrl: './dynamic-tabs.component.html'
})
export class DynamicTabsComponent {
  @Input() tabConfig: any[] = [];
  @Output() formSubmitted = new EventEmitter<any>();

  activeTabIndex: number = 0;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnChanges() {
    if (this.tabConfig.length) {
      this.createFormControls();
    }
  }

  createFormControls() {
    this.tabConfig.forEach((tab) => {
      tab.fields.forEach((field) => {
        this.form.addControl(field.name, this.fb.control('', Validators.required));
      });
    });
  }

  switchTab(index: number) {
    this.activeTabIndex = index;
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmitted.emit(this.form.value);
    }
  }
}
