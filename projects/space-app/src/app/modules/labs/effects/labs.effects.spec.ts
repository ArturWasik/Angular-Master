import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LabsEffects } from './labs.effects';

describe('LabsEffects', () => {
  let actions$: Observable<any>;
  let effects: LabsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LabsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LabsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
