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
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-home.html',
  styleUrls: ['./admin-home.css']
})
export class AdminHomeComponent {
  menu: MenuItem[] = [
    { label: 'Login',             path: 'login',             icon: '🔐', desc: 'Admin sign-in page' },
    { label: 'User Management',   path: 'user-management',   icon: '👤', desc: 'Create & manage users' },
    { label: 'Roles & Permissions', path: 'roles-permissions', icon: '🛡️', desc: 'Assign app privileges' },
    { label: 'User Activity Log', path: 'user-activity-log', icon: '📜', desc: 'Audit trail of user actions' },
  ];
}
