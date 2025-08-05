import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { DatePicker } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, ToastModule, MessageModule, DatePicker, TextareaModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
  providers: [MessageService]
})
export class CrudComponent {
  exampleForm: FormGroup;
  formSubmitted = false;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.exampleForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    this.loading = true;
    if (this.exampleForm.valid) {
      setTimeout(() => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3000 });
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
        this.exampleForm.reset();
        this.formSubmitted = false;
        this.loading = false;
      }, 1500);
    } else {
      setTimeout(() => {
        this.formSubmitted = false;
        this.loading = false;
      }, 2000);
    }
  }

  isInvalid(controlName: string) {
    const control = this.exampleForm.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted);
  }
}
