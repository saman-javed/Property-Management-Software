import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface Office { id: number; name: string; }
interface Town { id: number; name: string; }

@Component({
  selector: 'app-assign-town-office',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './assign-town-office.html',
  styleUrls: ['./assign-town-office.css']
})
export class AssignTownOfficeComponent {
  form: FormGroup;

  offices: Office[] = [
    { id: 1, name: 'Head Office' },
    { id: 2, name: 'City Office' }
  ];

  towns: Town[] = [
    { id: 1, name: 'Green Valley' },
    { id: 2, name: 'Sky Gardens' },
    { id: 3, name: 'Sunset Villas' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      officeId: [null, Validators.required],
      townIds: [[], Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Assign towns:', this.form.value);
      // TODO: API call
    }
  }
}
