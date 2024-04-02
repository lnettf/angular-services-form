import { Routes } from '@angular/router';
import { UserListComponent } from './modules/users/pages/user-list/user-list.component';
import { AddUserComponent } from './modules/users/pages/add-user/add-user.component';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: '**', redirectTo: 'users' },
];
