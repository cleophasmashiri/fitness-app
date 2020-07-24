import { Action } from '@ngrx/store';

import { AuthActions, SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_GROUPS } from './auth.actions';

export interface State {
  isAuthenticated: boolean;
  username: string;
  groups: string[];
}

const initialState: State = {
  isAuthenticated: false,
  username: undefined,
  groups: undefined
};

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...initialState,
        isAuthenticated: action.payload !== undefined && action.payload !== null ,
        username: action.payload
      };
    case SET_GROUPS:
      return {
        ...state,
        groups: action.payload
      };
    case SET_UNAUTHENTICATED:
      return {
        ...initialState
      };
    default: {
      return state;
    }
  }
}

export const getIsAuth = (state: State) => state.isAuthenticated;
export const getGroups = (state: State) => state.groups;
export const getUsername = (state: State) => state.username;
