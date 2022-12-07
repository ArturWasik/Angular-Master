import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { API_URL } from '../../tokens';
import { AppConfig } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  currentAppConfig: AppConfig | null = null;

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  getAppConfig(): Observable<AppConfig> {
    return this.http.get<AppConfig>(`${this.apiUrl}/app-config`).pipe(
      catchError(error => {
        const cachedAppConfig = JSON.parse(localStorage.getItem('app-config') ?? 'null');
        return cachedAppConfig ? of(cachedAppConfig) : throwError(error);
      }),
      tap(appConfig => {
        localStorage.setItem('app-config', JSON.stringify(appConfig));
        this.currentAppConfig = appConfig;
      })
    );
  }
}
