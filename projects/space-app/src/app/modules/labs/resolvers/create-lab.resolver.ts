import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Lab } from 'space-api/types';

@Injectable({
  providedIn: 'root'
})
export class CreateLabResolver implements Resolve<Lab> {
  resolve(route: ActivatedRouteSnapshot): Lab {
    return {
      id: null,
      details: {name: '', moonId: null, autonomous: false, enableTags: false},
      equipments: [],
    };
  }
}
