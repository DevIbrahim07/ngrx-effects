import { createFeature } from '@ngrx/store';
import { reducer, UserState } from './user.reducer';

export const userFeature = createFeature({
  name: 'user',
  reducer,
});
