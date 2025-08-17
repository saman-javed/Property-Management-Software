import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login';
import { UserManagementComponent } from './user-management/user-management';
import { RolesPermissionsComponent } from './roles-permissions/roles-permissions';
import { UserActivityLogComponent } from './user-activity-log/user-activity-log';

import { AdminHomeComponent } from './admin-home/admin-home';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'user-management' },

      { path: 'login',              component: LoginComponent },
      { path: 'user-management',    component: UserManagementComponent },
      { path: 'roles-permissions',  component: RolesPermissionsComponent },
      { path: 'user-activity-log',  component: UserActivityLogComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
