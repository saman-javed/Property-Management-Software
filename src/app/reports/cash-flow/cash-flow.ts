import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface Row {
  date: string;
  category: string;
  inflow: number;
  outflow: number;
}

@Component({
  selector: 'app-cash-flow',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cash-flow.html',
  styleUrls: ['./cash-flow.css']
})
export class CashFlowComponent {
  form: FormGroup;
  rows: Row[] = [
    { date: '2025-07-01', category: 'Installments', inflow: 50000, outflow: 0 },
    { date: '2025-07-05', category: 'Development', inflow: 0, outflow: 20000 }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      category: ['']
    });
  }

  runReport() {
    if (this.form.valid) {
      console.log('Cash flow filters:', this.form.value);
    }
  }

  get totals() {
    const inflow = this.rows.reduce((s, r) => s + r.inflow, 0);
    const outflow = this.rows.reduce((s, r) => s + r.outflow, 0);
    return { inflow, outflow, net: inflow - outflow };
  }
}
