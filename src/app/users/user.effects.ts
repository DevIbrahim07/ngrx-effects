import { Injectable, inject } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from './user.service';

import { loadUsers, loadUsersFailure, loadUsersSuccess } from './user.actions';
import { catchError, map, switchMap } from 'rxjs/operators';

import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  // action stream

  private actions$ = inject(Actions);
  // api service
  private userService = inject(UserService);

  // effect to load users
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map((users) => loadUsersSuccess({ users })),
          catchError((error) => of(loadUsersFailure({ error: error.message }))),
        ),
      ),
    ),
  );
}
