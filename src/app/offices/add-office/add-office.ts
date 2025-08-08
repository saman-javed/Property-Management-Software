import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-office',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-office.html',
  styleUrls: ['./add-office.css']
})
export class AddOfficeComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      officeName: ['', Validators.required],
      location: ['', Validators.required],
      phone: [''],
      manager: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('AddOffice:', this.form.value);
      // TODO: API call
    }
  }
}
