import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonthlyInstallmentsComponent } from './monthly-installments/monthly-installments';
import { BuyerLedgerReportComponent } from './buyer-ledger-report/buyer-ledger-report';
import { DealerCommissionReportComponent } from './dealer-commission-report/dealer-commission-report';
import { TownProfitLossComponent } from './town-profit-loss/town-profit-loss';
import { OverallProfitLossComponent } from './overall-profit-loss/overall-profit-loss';
import { CashFlowComponent } from './cash-flow/cash-flow';

import { ReportsHomeComponent } from './reports-home/reports-home';

const routes: Routes = [
  {
    path: '',
    component: ReportsHomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'monthly-installments' },

      { path: 'monthly-installments',     component: MonthlyInstallmentsComponent },
      { path: 'buyer-ledger-report',      component: BuyerLedgerReportComponent },
      { path: 'dealer-commission-report', component: DealerCommissionReportComponent },
      { path: 'town-profit-loss',         component: TownProfitLossComponent },
      { path: 'overall-profit-loss',      component: OverallProfitLossComponent },
      { path: 'cash-flow',                component: CashFlowComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {}
