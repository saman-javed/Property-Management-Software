import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddDealerComponent } from './add-dealer/add-dealer';
import { DealerListComponent } from './dealer-list/dealer-list';
import { PayCommissionComponent } from './pay-commission/pay-commission';
import { DealerLedgerComponent } from './dealer-ledger/dealer-ledger';

import { DealersHomeComponent } from './dealers-home/dealers-home';

const routes: Routes = [
  {
    path: '',
    component: DealersHomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dealer-list' },
      { path: 'add-dealer',      component: AddDealerComponent },
      { path: 'dealer-list',     component: DealerListComponent },
      { path: 'pay-commission',  component: PayCommissionComponent },
      { path: 'dealer-ledger',   component: DealerLedgerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealersRoutingModule {}
