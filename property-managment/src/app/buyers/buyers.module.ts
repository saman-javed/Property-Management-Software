import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyersRoutingModule } from './buyers-routing.module';
import { AddBuyerComponent } from './add-buyer/add-buyer';
import { BuyerLedgerComponent } from './buyer-ledger/buyer-ledger';
import { BuyerListComponent } from './buyer-list/buyer-list';
import { InstallmentAlertsComponent } from './installment-alerts/installment-alerts';
import { InstallmentDetailsComponent } from './installment-details/installment-details';
import { ReceiveInstallmentComponent } from './receive-installment/receive-installment';

@NgModule({
  declarations: [],
  imports: [CommonModule, BuyersRoutingModule,AddBuyerComponent, BuyerListComponent, BuyerLedgerComponent,ReceiveInstallmentComponent,InstallmentDetailsComponent,InstallmentAlertsComponent]
})
export class BuyersModule {}

