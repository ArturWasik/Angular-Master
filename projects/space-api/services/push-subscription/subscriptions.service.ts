import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { API_URL } from '../../tokens';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  addSubscription(subscription: PushSubscription): Observable<void> {
    return this.http.post<PushSubscription>(`${this.apiUrl}/subscriptions`, subscription).pipe(
      map(() => undefined)
    )
  }

  removeSubscription(subscription: PushSubscription): Observable<void> {
    return this.http.get<{id: number}[]>(`${this.apiUrl}/subscriptions?endpoint=${subscription.endpoint}`).pipe(
      map((records) => records[0]?.id),
      switchMap((id) => id ? this.http.delete<void>(`${this.apiUrl}/subscriptions/${id}`) : of(undefined))
    )
  }
}
