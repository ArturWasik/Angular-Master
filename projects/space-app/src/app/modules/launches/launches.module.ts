import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesComponent } from './views/launches/launches.component';
import { LaunchesListComponent } from './components/launches-list/launches-list.component';
import { LaunchesListItemComponent } from './components/launches-list-item/launches-list-item.component';
import { LaunchDetailsComponent } from './components/launch-details/launch-details.component';


@NgModule({
  declarations: [LaunchesComponent, LaunchesListComponent, LaunchesListItemComponent, LaunchDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    LaunchesRoutingModule
  ]
})
export class LaunchesModule { }
