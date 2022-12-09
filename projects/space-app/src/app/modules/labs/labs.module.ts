import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LabsRoutingModule } from './labs-routing.module';
import { LabsComponent } from './views/labs/labs.component';
import { LabsListComponent } from './components/labs-list/labs-list.component';
import { LabsListItemComponent } from './components/labs-list-item/labs-list-item.component';
import { MoonNamePipe } from './pipes/moon-name/moon-name.pipe';
import { LabFormComponent } from './views/lab-form/lab-form.component';
import { LabDetailsFormComponent } from './components/lab-details-form/lab-details-form.component';
import { LabEquipmentsFormComponent } from './components/lab-equipments-form/lab-equipments-form.component';
import { EquipmentFormComponent } from './components/equipment-form/equipment-form.component';
import { LabMoonIdSelectorComponent } from './lab-moon-id-selector/lab-moon-id-selector.component';
import { ComputerFormComponent } from './components/computer-form/computer-form.component';
import { DetectorFormComponent } from './components/detector-form/detector-form.component';
import { StoreModule } from '@ngrx/store';
import * as fromLabs from './reducers/labs.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LabsEffects } from './effects/labs.effects';

@NgModule({
  declarations: [
    LabsComponent,
    LabsListComponent,
    LabsListItemComponent,
    MoonNamePipe,
    LabFormComponent,
    LabDetailsFormComponent,
    LabEquipmentsFormComponent,
    EquipmentFormComponent,
    LabMoonIdSelectorComponent,
    ComputerFormComponent,
    DetectorFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LabsRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromLabs.labsFeatureKey, fromLabs.reducer),
    EffectsModule.forFeature([LabsEffects])
  ]
})
export class LabsModule { }
