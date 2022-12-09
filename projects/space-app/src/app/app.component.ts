import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppConfig } from 'space-api/types';
import { APP_CONFIG } from './app-config-token';
import { selectNavigationVisible } from './selectors/app.selectors';
import { BusyInterceptor } from './services/busy.interceptor';
import { PushService } from './services/push.service';
import { UpdateService } from './services/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'space-app';

  appVersion = this.appConfig.version;
  busy = this.busyInterceptor.busy;

  updateAvailable = this.update.updateAvailable;
  unrecoverableError = this.update.unrecoverableError;
  isSubscribed = this.push.isSubscribed;

  navigationVisible = this.store.select(selectNavigationVisible);

  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig,
              private busyInterceptor: BusyInterceptor,
              private update: UpdateService,
              private push: PushService,
              private store: Store) {}

  activateUpdate(): void {
    this.update.activateUpdate();
  }

  reloadApp(): void {
    this.update.reloadApp();
  }

  requestSubscription() {
    this.push.requestSubscription().subscribe();
  }

  revokeSubscription() {
    this.push.revokeSubscription().subscribe();
  }
}
