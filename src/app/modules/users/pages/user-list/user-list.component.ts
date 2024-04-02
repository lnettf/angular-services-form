import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../User';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  usersList: User[] = [];
  isLoading = true;

  constructor(private usersService: UsersService) {}

  async ngOnInit(): Promise<void> {
    this.getUsers();
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe({
      next: (res) => {
        console.warn({ res });
        this.getUsers();
      },
      error: (error) => {
        console.warn({ error });
      },
    });
  }

  getUsers() {
    this.usersService.getUsers().subscribe({
      next: (userData) => {
        this.usersList = userData;
        console.warn({ userData });
      },
      error: (error) => {
        console.warn({ error });
      },
      complete: () => {
        console.warn('fin!');
        this.isLoading = false;
      },
    });
  }
}
