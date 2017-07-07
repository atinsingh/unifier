import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { Dashboard } from './dashboard.page';


export const routes: Routes = [
  { path: 'unifier/home', component: Dashboard  }
  //{ path: 'dashboards/beta', component: DashboardsBeta },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Dashboard
  ]

})

export class DashboardsModule { }
