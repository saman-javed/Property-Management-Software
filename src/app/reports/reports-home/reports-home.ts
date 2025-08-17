import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  path: string; // child route (relative)
  icon?: string;
  desc?: string;
}

@Component({
  selector: 'app-reports-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reports-home.html',
  styleUrls: ['./reports-home.css']
})
export class ReportsHomeComponent {
  menu: MenuItem[] = [
    { label: 'Monthly Installments', path: 'monthly-installments',      icon: '🗓️', desc: 'Monthly installment summary' },
    { label: 'Buyer Ledger Report',  path: 'buyer-ledger-report',       icon: '📒', desc: 'Buyer-wise ledger report' },
    { label: 'Dealer Commission',    path: 'dealer-commission-report',  icon: '💼', desc: 'Dealer commission summary' },
    { label: 'Town Profit / Loss',   path: 'town-profit-loss',          icon: '🏘️', desc: 'P/L for selected town/project' },
    { label: 'Overall Profit / Loss',path: 'overall-profit-loss',       icon: '📈', desc: 'Global P/L across towns' },
    { label: 'Cash Flow',            path: 'cash-flow',                 icon: '💧', desc: 'Inflow vs outflow by period' },
  ];
}
