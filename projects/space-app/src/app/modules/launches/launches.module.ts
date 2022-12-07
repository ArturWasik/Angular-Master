import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesComponent } from './views/launches/launches.component';


@NgModule({
  declarations: [LaunchesComponent],
  imports: [
    CommonModule,
    SharedModule,
    LaunchesRoutingModule
  ]
})
export class LaunchesModule { }
