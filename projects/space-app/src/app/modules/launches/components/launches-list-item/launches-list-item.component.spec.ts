import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesListItemComponent } from './launches-list-item.component';

describe('LaunchesListItemComponent', () => {
  let component: LaunchesListItemComponent;
  let fixture: ComponentFixture<LaunchesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchesListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
