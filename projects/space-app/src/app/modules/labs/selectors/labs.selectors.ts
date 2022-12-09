import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLabs from '../reducers/labs.reducer';

const {selectAll} = fromLabs.labsAdapter.getSelectors();

export const selectLabsState = createFeatureSelector<fromLabs.State>(
  fromLabs.labsFeatureKey
);

export const selectLabsAll = createSelector(
  selectLabsState,
  selectAll
);
