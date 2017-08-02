import { NgModule }      from '@angular/core';
import {SearchModule} from "./search/search.module";
import {HomeModule} from "./home/home.module";

@NgModule({
  imports: [
  //  CommonModule,
  //  DashboardsModule,
    SearchModule,
    HomeModule
  ]
})
export class StructureModule { }
