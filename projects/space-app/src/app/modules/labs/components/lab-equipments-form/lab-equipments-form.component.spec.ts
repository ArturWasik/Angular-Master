import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabEquipmentsFormComponent } from './lab-equipments-form.component';

describe('LabEquipmentFormComponent', () => {
  let component: LabEquipmentsFormComponent;
  let fixture: ComponentFixture<LabEquipmentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabEquipmentsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabEquipmentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
