import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { BehaviorSubject, debounce, finalize, map, Observable, of, timer } from 'rxjs';

@Injectable({providedIn: 'root'})
export class BusyInterceptor implements HttpInterceptor {

  activeRequestCount = new BehaviorSubject<number>(0);

  busy = this.activeRequestCount.pipe(
    map(count => count > 0),
    debounce(busy => busy ? timer(100) : of(0))
  );
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.activeRequestCount.next(this.activeRequestCount.getValue() + 1);
    return next.handle(request).pipe(
      finalize(() => this.activeRequestCount.next(this.activeRequestCount.getValue() - 1))
    );
  }
}
