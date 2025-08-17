import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface Row {
  buyer: string;
  dueDate: string;
  amount: number;
  status: 'Paid' | 'Pending';
}

@Component({
  selector: 'app-monthly-installments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './monthly-installments.html',
  styleUrls: ['./monthly-installments.css']
})
export class MonthlyInstallmentsComponent {
  form: FormGroup;
  rows: Row[] = [
    { buyer: 'Ali Khan', dueDate: '2025-08-10', amount: 15000, status: 'Paid' },
    { buyer: 'Sara Ahmed', dueDate: '2025-08-15', amount: 12000, status: 'Pending' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      month: ['', Validators.required],
      year: [new Date().getFullYear(), [Validators.required, Validators.min(2000)]],
      townId: [null]
    });
  }

  runReport() {
    if (this.form.valid) {
      console.log('Monthly report filters:', this.form.value);
      // TODO: call API
    }
  }
}
