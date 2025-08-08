import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerLedgerReportComponent } from './buyer-ledger-report/buyer-ledger-report';
import { CashFlowComponent } from './cash-flow/cash-flow';
import { DealerCommissionReportComponent } from './dealer-commission-report/dealer-commission-report';
import { MonthlyInstallmentsComponent } from './monthly-installments/monthly-installments';
import { OverallProfitLossComponent } from './overall-profit-loss/overall-profit-loss';
import { TownProfitLossComponent } from './town-profit-loss/town-profit-loss';

const routes: Routes = [
  { path: 'buyer-ledger-rep', component: BuyerLedgerReportComponent },
  { path: 'cash-flow', component: CashFlowComponent },
  { path: 'dealer-comm-rep', component: DealerCommissionReportComponent },
  { path: 'month-installment', component: MonthlyInstallmentsComponent },
  { path: 'overall-profit-loss', component: OverallProfitLossComponent },
  { path: 'town-profit-loss', component: TownProfitLossComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
