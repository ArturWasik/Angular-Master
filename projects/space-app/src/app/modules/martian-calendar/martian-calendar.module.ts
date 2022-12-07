import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MartianCalendarRoutingModule } from './martian-calendar-routing.module';
import { MartianCalendarComponent } from './martian-calendar.component';


@NgModule({
  declarations: [MartianCalendarComponent],
  imports: [
    CommonModule,
    SharedModule,
    MartianCalendarRoutingModule
  ]
})
export class MartianCalendarModule { }
