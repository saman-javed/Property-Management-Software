import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface Row {
  head: string;
  income: number;
  expense: number;
}

@Component({
  selector: 'app-town-profit-loss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './town-profit-loss.html',
  styleUrls: ['./town-profit-loss.css']
})
export class TownProfitLossComponent {
  form: FormGroup;
  rows: Row[] = [
    { head: 'Installments', income: 250000, expense: 0 },
    { head: 'Development', income: 0, expense: 120000 },
    { head: 'Marketing', income: 0, expense: 30000 }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      townId: [null, Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required]
    });
  }

  runReport() {
    if (this.form.valid) {
      console.log('Town P&L filters:', this.form.value);
    }
  }

  get totals() {
    const income = this.rows.reduce((s, r) => s + r.income, 0);
    const expense = this.rows.reduce((s, r) => s + r.expense, 0);
    return { income, expense, net: income - expense };
  }
}
