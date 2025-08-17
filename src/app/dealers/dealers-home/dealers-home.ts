import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  path: string;   // child route (relative)
  icon?: string;
  desc?: string;
}

@Component({
  selector: 'app-dealers-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dealers-home.html',
  styleUrls: ['./dealers-home.css']
})
export class DealersHomeComponent {
  menu: MenuItem[] = [
    { label: 'Add Dealer',            path: 'add-dealer',       icon: '➕', desc: 'Create a new dealer record' },
    { label: 'Dealer List / Search',  path: 'dealer-list',      icon: '🔎', desc: 'Find and manage dealers' },
    { label: 'Pay Commission',        path: 'pay-commission',   icon: '💸', desc: 'Record commission payout' },
    { label: 'Dealer Ledger',         path: 'dealer-ledger',    icon: '📒', desc: 'Commissions & payouts history' }
  ];
}
