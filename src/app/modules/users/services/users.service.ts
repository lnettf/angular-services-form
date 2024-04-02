import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../User';
import { retry, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersURL = 'https://api-node-form-dev-rsbk.2.us-1.fl0.io/api/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.usersURL);
  }

  saveUser(user: Omit<User, 'id'>) {
    return this.http.post(this.usersURL, user);
  }

  deleteUser(userId: number) {
    return this.http.delete(`${this.usersURL}/${userId}`);
  }
}
