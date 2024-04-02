import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(3)]],
      surname: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      // call to back
      this.userService.saveUser(this.userForm.value).subscribe({
        next: (res) => {
          this.userForm.reset();
          Swal.fire({
            title: 'Good job!',
            text: 'You clicked the button!',
            icon: 'success',
          });
        },
        error: (error) => {
          console.warn({ error });
        },
      });
    }
  }
}
