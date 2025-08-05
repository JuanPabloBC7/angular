import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {
  userForm: FormGroup;
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
      setTimeout(() => {
        this.userForm.reset();
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
}
