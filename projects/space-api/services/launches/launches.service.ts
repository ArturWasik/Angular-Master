import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../tokens';
import { Launch, LaunchDetailsUpdate, LaunchesQueryParams } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  private readonly defaultQueryParams: LaunchesQueryParams = {sort: 'id', order: 'ASC', query: ''};

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  getLaunches(params: Partial<LaunchesQueryParams> = {}): Observable<Launch[]> {
    const {sort, order, query} = {...this.defaultQueryParams, ...params};
    return this.http.get<Launch[]>(`${this.apiUrl}/launches`, {params: {_sort: sort.toString(), _order: order, q: query}});
  }

  getLaunch(id: number): Observable<Launch> {
    return this.http.get<Launch>(`${this.apiUrl}/launches/${id}`);
  }

  updateDetails(detailsUpdate: LaunchDetailsUpdate): Observable<Launch> {
    const {id, details} = detailsUpdate;
    return this.http.post<Launch>(`${this.apiUrl}/launches/${id}/details`, {details});
  }
}
