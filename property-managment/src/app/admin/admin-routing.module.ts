import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { RolesPermissionsComponent } from './roles-permissions/roles-permissions';
import { UserActivityLogComponent } from './user-activity-log/user-activity-log';
import { UserManagementComponent } from './user-management/user-management';


const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'role-per', component: RolesPermissionsComponent },
   { path: 'user-activity', component: UserActivityLogComponent },
   { path: 'user-management', component: UserManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
