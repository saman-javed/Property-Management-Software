import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface Row {
  date: string;
  dealer: string;
  saleRef: string;
  commission: number;
}

@Component({
  selector: 'app-dealer-commission-report',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dealer-commission-report.html',
  styleUrls: ['./dealer-commission-report.css']
})
export class DealerCommissionReportComponent {
  form: FormGroup;
  rows: Row[] = [
    { date: '2025-07-04', dealer: 'Ahmad Raza', saleRef: 'Plot A12', commission: 35000 },
    { date: '2025-07-18', dealer: 'Sana Sheikh', saleRef: 'Plot B07', commission: 48000 }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dealerId: [null],
      from: ['', Validators.required],
      to: ['', Validators.required]
    });
  }

  runReport() {
    if (this.form.valid) {
      console.log('Dealer commission filters:', this.form.value);
    }
  }

  get total(): number {
    return this.rows.reduce((s, r) => s + r.commission, 0);
  }
}
