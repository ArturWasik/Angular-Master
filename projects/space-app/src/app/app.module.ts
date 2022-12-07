import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { A2sCommModule } from 'a2s-comm';
import { API_URL } from 'space-api/tokens';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { StartComponent } from './views/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent
  ],
  imports: [
    A2sCommModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: API_URL, useValue: environment.apiUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
