import { Action } from '@ngrx/store';

export const SET_AUTHENTICATED = '[Auth] Set Authenticated';
export const SET_UNAUTHENTICATED = '[Auth] Set Unauthenticated';
export const SET_GROUPS = '[Auth] Set Groups';

export class SetAuthenticated implements Action {
  constructor(public payload: string) {}
  readonly type = SET_AUTHENTICATED;
}

export class SetUnauthenticated implements Action {
  constructor(public payload: any) {}
  readonly type = SET_UNAUTHENTICATED;
}

export class SetGroups implements Action {
  constructor(public payload: string[]) {}
  readonly type = SET_GROUPS;
}

export type AuthActions = SetAuthenticated | SetUnauthenticated | SetGroups;
