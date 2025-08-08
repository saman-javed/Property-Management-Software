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
  selector: 'app-towns-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './towns-home.html',
  styleUrls: ['./towns-home.css']
})
export class TownsHomeComponent {
  menu: MenuItem[] = [
    { label: 'Add Town / Project', path: 'add-town',           icon: '➕', desc: 'Create a new town/project' },
    { label: 'Town / Project List',path: 'town-list',          icon: '📋', desc: 'Search and manage towns' },
    { label: 'Assign Towns to Office', path: 'assign-town-office', icon: '🔗', desc: 'Link towns with offices' }
  ];
}
