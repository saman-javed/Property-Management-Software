import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface LedgerRow {
  date: string;
  description: string;
  debit: number;
  credit: number;
}

@Component({
  selector: 'app-buyer-ledger-report',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './buyer-ledger-report.html',
  styleUrls: ['./buyer-ledger-report.css']
})
export class BuyerLedgerReportComponent {
  form: FormGroup;
  rows: LedgerRow[] = [
    { date: '2025-07-01', description: 'Installment Received', debit: 0, credit: 15000 },
    { date: '2025-07-12', description: 'Late Fee', debit: 500, credit: 0 }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      buyerId: [null, Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required]
    });
  }

  runReport() {
    if (this.form.valid) {
      console.log('Buyer ledger filters:', this.form.value);
      // TODO: call API
    }
  }

  get balance(): number {
    const cr = this.rows.reduce((s, r) => s + r.credit, 0);
    const dr = this.rows.reduce((s, r) => s + r.debit, 0);
    return cr - dr;
  }
}
