import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTownComponent } from './add-town/add-town';
import { AssignTownOfficeComponent } from './assign-town-office/assign-town-office';
import { TownListComponent } from './town-list/town-list';
const routes: Routes = [
  { path: 'add-town', component: AddTownComponent },
  { path: 'assign-town-office', component: AssignTownOfficeComponent },
  { path: 'town-list', component: TownListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TownsRoutingModule { }
