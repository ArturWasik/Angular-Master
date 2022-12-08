import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MoonsService } from 'space-api/services';
import { Moon } from 'space-api/types';
import { mapToMoonName } from './map-to-moon-name';

@Pipe({
  name: 'moonName'
})
export class MoonNamePipe implements PipeTransform {
  private static moons: Observable<Moon[]>;

  constructor(private moonService: MoonsService) {
    MoonNamePipe.moons ??= this.moonService.getMoons().pipe(
      shareReplay(1)
    );
  }

  transform(moonId: number): Observable<string> {
    return MoonNamePipe.moons.pipe(
      mapToMoonName(moonId)
    );
  }
}
