import * as fromLabs from '../reducers/labs.reducer';
import { selectLabsState } from './labs.selectors';

describe('Labs Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLabsState({
      [fromLabs.labsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
