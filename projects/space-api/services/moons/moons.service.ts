import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../tokens';
import { Moon } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class MoonsService {
  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  getMoons(): Observable<Moon[]> {
    return this.http.get<Moon[]>(`${this.apiUrl}/moons`);
  }

  getMoon(id: number): Observable<Moon> {
    return this.http.get<Moon>(`${this.apiUrl}/moons/${id}`);
  }
}
