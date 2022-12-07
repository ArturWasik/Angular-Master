import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './views/start/start.component';

const routes: Routes = [
  {
    path: 'start', component: StartComponent
  },
  {
    path: 'launches',
    loadChildren: () => import('./modules/launches/launches.module').then(module => module.LaunchesModule)
  },
  {
    path: 'labs',
    loadChildren: () => import('./modules/labs/labs.module').then(module => module.LabsModule)
  },
  {
    path: 'martian-calendar',
    loadChildren: () => import('./modules/martian-calendar/martian-calendar.module').then(module => module.MartianCalendarModule)
  },
  {
    path: '**',
    redirectTo: 'start',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
