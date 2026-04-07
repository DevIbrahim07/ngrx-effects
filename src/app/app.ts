import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { userFeature } from './users/user.feature';
import { loadUsers } from './users/user.actions';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users$!: Observable<any>;
  constructor(private store: Store) {
    this.users$ = this.store.select(userFeature.selectUserState);
  }

  load() {
    this.store.dispatch(loadUsers());
  }
}
