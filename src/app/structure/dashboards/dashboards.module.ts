import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';
import {PopoverModule} from "ng2-popover";


import { Dashboard } from './dashboard.page';
import { AccountcardComponent } from './accountcard/accountcard.component';
import { BillingComponent } from './billing/billing.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { CurrentBalanceComponent } from './current-balance/current-balance.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { AllowancesComponent } from './allowances/allowances.component';
import { AllowanceDetailComponent } from './allowance-detail/allowance-detail.component';
import { ChargesComponent } from './charges/charges.component';
import { ChargeDetailComponent } from './charge-detail/charge-detail.component';


export const routes: Routes = [
  { path: 'dashboard', component: Dashboard  }
];

@NgModule({
  imports: [
      CommonModule,
      PopoverModule,
      RouterModule.forChild(routes)
  ],
  declarations: [
    Dashboard,
    AccountcardComponent,
    BillingComponent,
    AccountDetailComponent,
    CurrentBalanceComponent,
    EquipmentComponent,
    AllowancesComponent,
    AllowanceDetailComponent,
    ChargesComponent,
    ChargeDetailComponent,
  ]

})

export class DashboardsModule { }
