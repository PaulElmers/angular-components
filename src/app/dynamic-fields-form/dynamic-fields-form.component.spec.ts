import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFieldsFormComponent } from './dynamic-fields-form.component';

describe('DynamicFieldsFormComponent', () => {
  let component: DynamicFieldsFormComponent;
  let fixture: ComponentFixture<DynamicFieldsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFieldsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFieldsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
