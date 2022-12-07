import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MartianCalendarComponent } from './martian-calendar.component';

describe('MartianCalendarComponent', () => {
  let component: MartianCalendarComponent;
  let fixture: ComponentFixture<MartianCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MartianCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MartianCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
