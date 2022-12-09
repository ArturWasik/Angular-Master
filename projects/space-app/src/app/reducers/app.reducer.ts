import { Action, createReducer, on } from '@ngrx/store';
import { hideNavigation, showNavigation } from '../actions/app.actions';


export const appFeatureKey = 'app';

export interface State {
  navigationVisible: boolean;
}

export const initialState: State = {
  navigationVisible: true
};

export const reducer = createReducer(
  initialState,
  on(showNavigation, state => ({...state, navigationVisible: true})),
  on(hideNavigation, state => ({...state, navigationVisible: false})),
);
