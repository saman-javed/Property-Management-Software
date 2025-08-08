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
  selector: 'app-offices-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './offices-home.html',
  styleUrls: ['./offices-home.css']
})
export class OfficesHomeComponent {
  menu: MenuItem[] = [
    { label: 'Add Office',  path: 'add-office',  icon: '➕', desc: 'Create a new office' },
    { label: 'Office List', path: 'office-list', icon: '🏬', desc: 'Search and manage offices' },
  ];
}
