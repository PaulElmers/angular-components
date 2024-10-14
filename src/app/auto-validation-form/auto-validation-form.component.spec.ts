import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoValidationFormComponent } from './auto-validation-form.component';

describe('AutoValidationFormComponent', () => {
  let component: AutoValidationFormComponent;
  let fixture: ComponentFixture<AutoValidationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoValidationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoValidationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
