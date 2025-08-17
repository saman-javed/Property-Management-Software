import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TownsRoutingModule } from './towns-routing.module';
import { AddTownComponent } from './add-town/add-town';
import { AssignTownOfficeComponent } from './assign-town-office/assign-town-office';
import { TownListComponent } from './town-list/town-list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TownsRoutingModule,AddTownComponent,TownListComponent,AssignTownOfficeComponent
  ]
})
export class TownsModule { }
