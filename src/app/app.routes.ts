// app.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';

export const routes: Routes = [
  {
    path: 'buyers',
    loadChildren: () =>
    import('./buyers/buyers.module').then(m => m.BuyersModule)
  },
  {
    path: 'admin',
    loadChildren: () =>
    import('./admin/admin.module').then(m => m.AdminModule) 
  },
   {
    path: 'dealers',
    loadChildren: () =>
    import('./dealers/dealers.module').then(m => m.DealersModule) 
  },
   {
    path: 'offices',
    loadChildren: () =>
    import('./offices/offices.module').then(m => m.OfficesModule) 
  },
   {
    path: 'reports',
    loadChildren: () =>
    import('./reports/reports.module').then(m => m.ReportsModule) 
  },
   {
    path: 'towns',
    loadChildren: () =>
    import('./towns/towns.module').then(m => m.TownsModule) 
  },
  {
    path: '',
    component: DashboardComponent
  }
];
