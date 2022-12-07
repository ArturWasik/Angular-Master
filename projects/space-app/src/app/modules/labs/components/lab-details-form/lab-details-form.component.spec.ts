import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabDetailsFormComponent } from './lab-details-form.component';

describe('LabDetailsFormComponent', () => {
  let component: LabDetailsFormComponent;
  let fixture: ComponentFixture<LabDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
