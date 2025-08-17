import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-buyer-ledger',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],  // Add CurrencyPipe here
  templateUrl: './buyer-ledger.html',
  styleUrls: ['./buyer-ledger.css']
})
export class BuyerLedgerComponent {
  ledger = [
    { date: '2025-01-01', description: 'Payment received', amount: 5000 },
    { date: '2025-02-01', description: 'Installment due', amount: -3000 }
  ];
}
