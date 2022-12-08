import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { A2sCommModule } from 'a2s-comm';
import { API_URL } from 'space-api/tokens';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { StartComponent } from './views/start/start.component';
import { SharedLibModule } from 'projects/shared-lib/src/public-api';
import { AppConfigService } from 'space-api/services';
import { Observable } from 'rxjs';
import { AppConfig } from 'space-api/types';
import { ForbiddenComponent } from './views/forbidden/forbidden.component';
import { BrowserComponent } from './views/browser/browser.component';
import { BusyInterceptor } from './services/busy.interceptor';

function appConfigInitializer(appConfigService: AppConfigService): () => Observable<AppConfig> {
  return () => appConfigService.getAppConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ForbiddenComponent,
    BrowserComponent
  ],
  imports: [
    A2sCommModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    SharedLibModule
  ],
  providers: [
    {provide: API_URL, useValue: environment.apiUrl},
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigInitializer,
      deps: [AppConfigService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: BusyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
