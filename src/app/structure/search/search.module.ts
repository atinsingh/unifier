import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";

import { SearchComponent } from './search/search.component';
import {SearchService} from "../../shared/search.service";
import {Dashboard} from "../dashboards/dashboard.page";
import {HomeModule} from "../home/home.module";

// const routes:Routes = [
//     { path: 'search/:term', component: SearchComponent  },
//     {path:  'dashboard/:id' , redirectTo:"unifier/home/dashboard/:id"}
//
// ];

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild(routes),
    HomeModule
  ],
  declarations: [SearchComponent],
  providers:[]
  // exports:[SearchModule]
})



export class SearchModule {

}
