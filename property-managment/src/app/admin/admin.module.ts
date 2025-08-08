import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login';
import { RolesPermissionsComponent } from './roles-permissions/roles-permissions';
import { UserActivityLogComponent } from './user-activity-log/user-activity-log';
import { UserManagementComponent } from './user-management/user-management';

@NgModule({
  declarations: [], 
  imports: [
    CommonModule,
    AdminRoutingModule,
    LoginComponent,
    RolesPermissionsComponent,
    UserActivityLogComponent,
    UserManagementComponent
  ]
})
export class AdminModule { }
