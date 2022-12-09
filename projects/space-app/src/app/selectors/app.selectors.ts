import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from '../reducers/app.reducer';

export const selectAppState = createFeatureSelector<fromApp.State>(fromApp.appFeatureKey);

export const selectNavigationVisible = createSelector(
    selectAppState,
    state => state.navigationVisible
  );
