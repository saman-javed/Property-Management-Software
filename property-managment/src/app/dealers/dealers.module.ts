import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealersRoutingModule } from './dealers-routing.module';
import { AddDealerComponent } from './add-dealer/add-dealer';
import { DealerLedgerComponent } from './dealer-ledger/dealer-ledger';
import { DealerListComponent } from './dealer-list/dealer-list';
import { PayCommissionComponent } from './pay-commission/pay-commission';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DealersRoutingModule,
    AddDealerComponent,DealerLedgerComponent,DealerListComponent,PayCommissionComponent
  ]
})
export class DealersModule { }
