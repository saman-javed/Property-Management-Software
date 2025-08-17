import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddTownComponent } from './add-town/add-town';
import { TownListComponent } from './town-list/town-list';
import { AssignTownOfficeComponent } from './assign-town-office/assign-town-office';

import { TownsHomeComponent } from './towns-home/towns-home';

const routes: Routes = [
  {
    path: '',
    component: TownsHomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'town-list' },

      { path: 'add-town',           component: AddTownComponent },
      { path: 'town-list',          component: TownListComponent },
      { path: 'assign-town-office', component: AssignTownOfficeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TownsRoutingModule {}
