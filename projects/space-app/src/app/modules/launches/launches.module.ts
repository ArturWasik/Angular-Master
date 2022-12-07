import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesComponent } from './views/launches/launches.component';
import { LaunchesListComponent } from './components/launches-list/launches-list.component';
import { LaunchesListItemComponent } from './components/launches-list-item/launches-list-item.component';
import { LaunchDetailsComponent } from './components/launch-details/launch-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LaunchesSearchComponent } from './components/launches-search/launches-search.component';


@NgModule({
  declarations: [LaunchesComponent, LaunchesListComponent, LaunchesListItemComponent, LaunchDetailsComponent, LaunchesSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    LaunchesRoutingModule,
    ReactiveFormsModule
  ]
})
export class LaunchesModule { }
