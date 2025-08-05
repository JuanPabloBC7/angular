import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-crud',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './simple-crud.component.html',
  styleUrl: './simple-crud.component.scss'
})
export class SimpleCrudComponent {
  userForm: FormGroup;
  isEditing = false;
  users: any[] = [];
  user: any = {};
  alert: any = {
    type: 'success',
    message: 'User submitted successfully!',
    icon: 'fa-solid fa-circle-check',
    show: false
  };

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.alert.show = true;
      this.alert.type = 'success';
      this.alert.message = 'User submitted successfully!';
      this.alert.icon = 'fa-solid fa-circle-check';
      
      this.users.push(this.userForm.value);
      this.userForm.reset();

      setTimeout(() => {
        this.alert.show = false;
      }, 3000);
    } else {
      this.alert.show = true;
      this.alert.type = 'danger';
      this.alert.message = 'Something is wrong, please try again later.';
      this.alert.icon = 'fa-solid fa-circle-exclamation';
      setTimeout(() => {
        this.alert.show = false;
      }, 4000);
    }
  }

  viewUser(user: any) {
    this.user = user;
  }

  editUser(user: any) {
    this.isEditing = true;
    this.userForm.patchValue({
      firstname: user.firstname,
      lastname: user.lastname,
      birthday: user.birthday,
      email: user.email,
      description: user.description
    });
  }

  updateUser() {
    if (this.userForm.valid) {
      this.alert.show = true;
      this.alert.type = 'success';
      this.alert.message = 'User updated successfully!';
      this.alert.icon = 'fa-solid fa-circle-check';

      const index = this.users.findIndex(u => u.email === this.user.email);
      if (index !== -1) {
        this.users[index] = this.userForm.value;
      }
      this.userForm.reset();
      this.isEditing = false;

      setTimeout(() => {
        this.alert.show = false;
      }, 3000);
    } else {
      this.alert.show = true;
      this.alert.type = 'danger';
      this.alert.message = 'Something is wrong, please try again later.';
      this.alert.icon = 'fa-solid fa-circle-exclamation';
      setTimeout(() => {
        this.alert.show = false;
      }, 4000);
    }
  }

  deleteUser() {
    const index = this.users.findIndex(u => u.email === this.user.email);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.alert.show = true;
      this.alert.type = 'success';
      this.alert.message = 'User deleted successfully!';
      this.alert.icon = 'fa-solid fa-circle-check';

      setTimeout(() => {
        this.alert.show = false;
      }, 3000);
    }
  }

  clearForm() {
    this.userForm.reset();
    this.isEditing = false;
  }
}
