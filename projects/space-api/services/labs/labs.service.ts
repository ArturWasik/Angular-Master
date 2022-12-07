import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../tokens';
import { Lab } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class LabsService {

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  getLabs(): Observable<Lab[]> {
    return this.http.get<Lab[]>(`${this.apiUrl}/labs`);
  }

  getLab(id: number): Observable<Lab> {
    return this.http.get<Lab>(`${this.apiUrl}/labs/${id}`);
  }

  saveLab(lab: Lab): Observable<Lab> {
    return lab.id ? this.updateLab(lab) : this.createLab(lab);
  }

  removeLab(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/labs/${id}`);
  }

  private updateLab(lab: Lab): Observable<Lab> {
    return this.http.put<Lab>(`${this.apiUrl}/labs/${lab.id}`, lab);
  }

  private createLab(lab: Lab): Observable<Lab> {
    return this.http.post<Lab>(`${this.apiUrl}/labs`, lab);
  }
}
