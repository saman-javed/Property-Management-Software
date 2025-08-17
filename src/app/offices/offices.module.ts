import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficesRoutingModule } from './offices-routing.module';
import { AddOfficeComponent } from './add-office/add-office';
import { OfficeListComponent } from './office-list/office-list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OfficesRoutingModule,AddOfficeComponent,OfficeListComponent
  ]
})
export class OfficesModule { }
