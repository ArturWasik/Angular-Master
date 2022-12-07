import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesSearchComponent } from './launches-search.component';

describe('LaunchesSearchComponent', () => {
  let component: LaunchesSearchComponent;
  let fixture: ComponentFixture<LaunchesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchesSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
