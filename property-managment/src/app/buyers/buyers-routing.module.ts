import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBuyerComponent  } from './add-buyer/add-buyer';
import { BuyerLedgerComponent } from './buyer-ledger/buyer-ledger';
import { BuyerListComponent } from './buyer-list/buyer-list';
import { InstallmentAlertsComponent } from './installment-alerts/installment-alerts';
import { InstallmentDetailsComponent } from './installment-details/installment-details';
import { ReceiveInstallmentComponent } from './receive-installment/receive-installment';

const routes: Routes = [
  { path: 'add-buyer', component: AddBuyerComponent },
  { path: 'buyer-list', component: BuyerListComponent },
  { path: 'buyer-ledger', component: BuyerLedgerComponent },
  { path: 'instal-alert', component: InstallmentAlertsComponent },
  { path: 'instal-detail', component: InstallmentDetailsComponent },
  { path: 'receive-install', component: ReceiveInstallmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyersRoutingModule { }
