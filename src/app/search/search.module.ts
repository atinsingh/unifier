import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from "./search.component";
import {RetriveComponent} from "../structure/search/search/retrieve.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AutogrowDirective} from "../autogrow.directive";

// const routes:Routes = [
//     { path: 'search/:term', component: RetriveComponent  },
//     {path:  'dashboard/:id' , redirectTo:"unifier/home/dashboard/:id"}
//
// ];

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule

  ],
  declarations: [SearchComponent, RetriveComponent,AutogrowDirective],
  providers:[],
  exports:[SearchComponent, AutogrowDirective]
})



export class SearchModule {

}
