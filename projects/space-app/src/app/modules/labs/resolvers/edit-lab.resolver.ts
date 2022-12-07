import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { LabsService } from 'space-api/services';
import { Lab } from 'space-api/types';

@Injectable({
  providedIn: 'root'
})
export class EditLabResolver implements Resolve<Lab> {
  constructor(private labsService: LabsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Lab> {
    return this.labsService.getLab(+route.params['id']);
  }
}
