import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface Row {
  segment: string;
  income: number;
  expense: number;
}

@Component({
  selector: 'app-overall-profit-loss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './overall-profit-loss.html',
  styleUrls: ['./overall-profit-loss.css']
})
export class OverallProfitLossComponent {
  form: FormGroup;
  rows: Row[] = [
    { segment: 'Town A', income: 300000, expense: 160000 },
    { segment: 'Town B', income: 180000, expense: 90000 }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required]
    });
  }

  runReport() {
    if (this.form.valid) {
      console.log('Overall P&L filters:', this.form.value);
    }
  }

  get totals() {
    const income = this.rows.reduce((s, r) => s + r.income, 0);
    const expense = this.rows.reduce((s, r) => s + r.expense, 0);
    return { income, expense, net: income - expense };
  }
}
