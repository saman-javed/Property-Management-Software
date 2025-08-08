import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOfficeComponent } from './add-office/add-office';
import { OfficeListComponent } from './office-list/office-list';
const routes: Routes = [
    { path: 'add-office', component: AddOfficeComponent },
    { path: 'office-list', component: OfficeListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficesRoutingModule { }
