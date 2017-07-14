import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { Dashboard } from './dashboard.page';
import { AccountcardComponent } from './accountcard/accountcard.component';


export const routes: Routes = [
  { path: 'unifier/home', component: Dashboard  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Dashboard,
    AccountcardComponent
  ]

})

export class DashboardsModule { }
