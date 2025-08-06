import { CommonModule } from '@angular/common';
import { Component, inject, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-simple-crud',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgbDatepickerModule],
  templateUrl: './simple-crud.component.html',
  styleUrl: './simple-crud.component.scss'
})
export class SimpleCrudComponent {
  private modalService = inject(NgbModal);
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
      const { day, month, year } = this.userForm.value.birthday;
      const formattedDay = String(day).padStart(2, '0');
      const formattedMonth = String(month).padStart(2, '0');
      this.userForm.value.birthday = `${formattedDay}/${formattedMonth}/${year}`;

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

  viewUser(user: any, modal: TemplateRef<any>, modalSize: string = '') {
    this.user = user;
    this.modalService.open(modal, { size: modalSize })
  }

  editUser(user: any) {
    this.isEditing = true;
    this.userForm.patchValue({
      firstname: user.firstname,
      lastname: user.lastname,
      birthday: {
        day: parseInt(user.birthday.split('/')[0], 10),
        month: parseInt(user.birthday.split('/')[1], 10),
        year: parseInt(user.birthday.split('/')[2], 10)
      },
      email: user.email,
      description: user.description
    });
  }

  updateUser() {
    if (this.userForm.valid) {
      const { day, month, year } = this.userForm.value.birthday;
      const formattedDay = String(day).padStart(2, '0');
      const formattedMonth = String(month).padStart(2, '0');
      this.userForm.value.birthday = `${formattedDay}/${formattedMonth}/${year}`;

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
      this.modalService.dismissAll();
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
