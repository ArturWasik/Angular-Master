import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabMoonIdSelectorComponent } from './lab-moon-id-selector.component';

describe('LabMoonIdSelectorComponent', () => {
  let component: LabMoonIdSelectorComponent;
  let fixture: ComponentFixture<LabMoonIdSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabMoonIdSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabMoonIdSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
