import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-installment-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './installment-details.html',
  styleUrls: ['./installment-details.css']
})
export class InstallmentDetailsComponent {
  installments = [
    { date: '2025-01-10', amount: 5000, status: 'Paid' },
    { date: '2025-02-10', amount: 5000, status: 'Pending' }
  ];
}
