import { Observable, pipe, UnaryFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { Moon } from 'space-api/types';

export function mapToMoonName(moonId: number): UnaryFunction<Observable<Moon[]>, Observable<string>> {
    return pipe(
        map((moons) => {
            const moon = moons.find(m => m.id === moonId);
        if (!moon) {
           throw new Error(`Could not find moon for id ${moonId}`);
      }
     return `${moon.name} (${moon.planet})`;
   })
 );
}
