import { Injectable } from '@angular/core';
import { SubscriptionsService } from 'space-api/services/push-subscription/subscriptions.service';
import { SwPush } from '@angular/service-worker';
import { filter, from, map, Observable, switchMap, take } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  isSubscribed = this.swPush.subscription.pipe(map(Boolean));

  constructor(private swPush: SwPush, private subscriptionsService: SubscriptionsService) { }

  requestSubscription(): Observable<void> {
    return from(this.swPush.requestSubscription({serverPublicKey: environment.publicVapidKey})).pipe(
      switchMap((subscription) => this.subscriptionsService.addSubscription(subscription))
    );
  }

  revokeSubscription(): Observable<void> {
    return this.swPush.subscription.pipe(
      take(1),
      filter(Boolean),
      switchMap((subscription) =>
        from(this.swPush.unsubscribe()).pipe(
          switchMap(() => this.subscriptionsService.removeSubscription(subscription))
        )
      )
    )
  }
}
