import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MoonsService } from 'space-api/services';

@Pipe({
  name: 'moonName'
})
export class MoonNamePipe implements PipeTransform {
  constructor(private moonService: MoonsService) {}

  transform(moonId: number): Observable<string> {
    return this.moonService.getMoon(moonId)
      .pipe(
        map(moon => moon ? `${moon.name} (${moon.planet})` : 'n/a')
      );
  }
}
