import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { BuyerLedgerReportComponent } from './buyer-ledger-report/buyer-ledger-report';
import { CashFlowComponent } from './cash-flow/cash-flow';
import { DealerCommissionReportComponent } from './dealer-commission-report/dealer-commission-report';
import { MonthlyInstallmentsComponent } from './monthly-installments/monthly-installments';
import { OverallProfitLossComponent } from './overall-profit-loss/overall-profit-loss';
import { TownProfitLossComponent } from './town-profit-loss/town-profit-loss';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    BuyerLedgerReportComponent,CashFlowComponent,DealerCommissionReportComponent,CashFlowComponent,MonthlyInstallmentsComponent,OverallProfitLossComponent,TownProfitLossComponent
  ]
})
export class ReportsModule { }
