import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsListItemComponent } from './labs-list-item.component';

describe('LabsListItemComponent', () => {
  let component: LabsListItemComponent;
  let fixture: ComponentFixture<LabsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
