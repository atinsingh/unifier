import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { DashboardsModule } from './dashboards/dashboards.module';
import {SearchModule} from "./search/search.module";

@NgModule({
  imports: [
  //  CommonModule,
    DashboardsModule,
    SearchModule
  ]
})
export class StructureModule { }
