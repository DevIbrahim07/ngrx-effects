import { createAction, props } from '@ngrx/store';
//load users
export const loadUsers = createAction('[User] Load Users');

// load users success
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: any[] }>(),
);

// load users failure
export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: string }>(),
);
