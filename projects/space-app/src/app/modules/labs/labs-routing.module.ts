import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateLabResolver } from './resolvers/create-lab.resolver';
import { EditLabResolver } from './resolvers/edit-lab.resolver';
import { LabsComponent } from './views/labs/labs.component';
import { LabFormComponent } from './views/lab-form/lab-form.component';

const routes: Routes = [
  {path: 'create/new', component: LabFormComponent, resolve: {lab: CreateLabResolver}},

  {path: 'edit/:id', component: LabFormComponent, resolve: {lab: EditLabResolver}},

  {path: '', component: LabsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabsRoutingModule { }
