import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDealerComponent } from './add-dealer/add-dealer';
import { DealerLedgerComponent } from './dealer-ledger/dealer-ledger';
import { DealerListComponent } from './dealer-list/dealer-list';
import { PayCommissionComponent } from './pay-commission/pay-commission';


const routes: Routes = [
  { path: 'add-dealer', component: AddDealerComponent },
  { path: 'dealer-ledger', component: DealerLedgerComponent },
  { path: 'dealer-list', component: DealerListComponent },
  { path: 'pay-commision', component: PayCommissionComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealersRoutingModule { }
