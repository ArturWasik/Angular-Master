import { createAction, props } from '@ngrx/store';
import { Lab } from 'space-api/types';

export const loadLabs = createAction('[Labs] Load Labs');
export const loadLabsSuccess = createAction('[Labs] Load Labs Success', props<{labs: Lab[]}>());
export const loadLabsFailure = createAction('[Labs] Load Labs Failure');
