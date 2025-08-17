import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LedgerRow {
  date: string;
  type: 'Commission' | 'Adjustment' | 'Payout';
  description: string;
  amount: number;
}

@Component({
  selector: 'app-dealer-ledger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dealer-ledger.html',
  styleUrls: ['./dealer-ledger.css']
})
export class DealerLedgerComponent {
  dealerName = 'Ahmad Raza';
  ledger: LedgerRow[] = [
    { date: '2025-01-03', type: 'Commission', description: 'Sale - Plot A12', amount: 35000 },
    { date: '2025-01-20', type: 'Payout', description: 'Commission Payout', amount: -20000 },
    { date: '2025-02-02', type: 'Commission', description: 'Sale - Plot B07', amount: 48000 },
    { date: '2025-02-15', type: 'Adjustment', description: 'Adjustment (late doc)', amount: -3000 }
  ];

  get total(): number {
    return this.ledger.reduce((s, r) => s + r.amount, 0);
  }
}
