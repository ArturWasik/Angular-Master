import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureEnabledGuard } from './services/feature-enabled.guard';
import { ForbiddenComponent } from './views/forbidden/forbidden.component';
import { StartComponent } from './views/start/start.component';

const routes: Routes = [
  {
    path: 'start', component: StartComponent,
    canActivate: [FeatureEnabledGuard],
    data: {feature: 'start'}
  },
  {
    path: 'launches',
    loadChildren: () => import('./modules/launches/launches.module').then(module => module.LaunchesModule),
    canLoad: [FeatureEnabledGuard],
    data: {feature: 'launches'}
  },
  {
    path: 'labs',
    loadChildren: () => import('./modules/labs/labs.module').then(module => module.LabsModule),
    canLoad: [FeatureEnabledGuard],
    data: {feature: 'labs'}
  },
  {
    path: 'martian-calendar',
    loadChildren: () => import('./modules/martian-calendar/martian-calendar.module').then(module => module.MartianCalendarModule),
    canLoad: [FeatureEnabledGuard],
    data: {feature: 'martian-calendar'}
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
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
