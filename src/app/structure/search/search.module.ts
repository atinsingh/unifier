import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRouteSnapshot, RouterModule, Routes} from "@angular/router";
import { SearchComponent } from './search/search.component';

const routes:Routes = [
    { path: 'search/:term', component: SearchComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchComponent],
  // exports:[SearchModule]
})



export class SearchModule {

}
