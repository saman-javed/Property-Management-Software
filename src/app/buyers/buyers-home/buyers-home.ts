import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  path: string;   // child route path (relative)
  icon?: string;
  desc?: string;
}

@Component({
  selector: 'app-buyers-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './buyers-home.html',
  styleUrls: ['./buyers-home.css']
})
export class BuyersHomeComponent {
  menu: MenuItem[] = [
    { label: 'Add Buyer',              path: 'add-buyer',        icon: '➕', desc: 'Create a new buyer record' },
    { label: 'Buyer List / Search',    path: 'buyer-list',       icon: '🔎', desc: 'Find, filter and manage buyers' },
    { label: 'Installment Details',    path: 'instal-detail',    icon: '📄', desc: 'View buyer installment plan' },
    { label: 'Receive Installment',    path: 'receive-install',  icon: '💵', desc: 'Record installment payment' },
    { label: 'Buyer Ledger',           path: 'buyer-ledger',     icon: '📒', desc: 'Complete ledger of a buyer' },
    { label: 'Installment Alerts',     path: 'instal-alert',     icon: '🔔', desc: 'Send SMS/print reminders' }
  ];
}
