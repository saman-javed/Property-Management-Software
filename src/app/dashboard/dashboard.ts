import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl:'./dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  modules = [
    {
      name: 'Buyers',
      description: 'Manage all buyers',
      icon: '👥',
      route: '/buyers'
    },
    {
      name: 'Dealers',
      description: 'Manage all dealers',
      icon: '🏢',
      route: '/dealers'
    },
    {
      name: 'Reports',
      description: 'View reports & analytics',
      icon: '📊',
      route: '/reports'
    },
    {
      name: 'Office',
      description: 'Manage offices',
      icon: '🏬',
      route: '/offices'
    },
    {
      name: 'Town',
      description: 'Manage towns & locations',
      icon: '📍',
      route: '/towns'
    },
    {
      name: 'Admin',
      description: 'Admin settings & users',
      icon: '⚙️',
      route: '/admin'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
