import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.page';
import {RouterModule, Routes} from "@angular/router";
import {DashboardsModule} from "../dashboards/dashboards.module";
import { TabnavComponent } from './tabnav/tabnav.component';
import {Dashboard} from "../dashboards/dashboard.page";
import { PaymentComponent } from './payment/payment.component';
import { HomesearchComponent } from './homesearch/homesearch.component';
import {CanActivateRoute} from "../../shared/canactivate.route";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchModule} from "../../search/search.module";
import {AutogrowDirective} from "../../autogrow.directive";




export const routes: Routes = [
    {path : 'unifier/home', component:HomesearchComponent, pathMatch:'full', canActivate:[CanActivateRoute]},
    { path: 'unifier/home/dashboard', component: HomeComponent, canActivate:[CanActivateRoute],
        children : [
            {path:':id', component:Dashboard},
            {path :':id/payment' , component:PaymentComponent}
        ]
    },

];

@NgModule({
    declarations: [
        HomeComponent,
        TabnavComponent,
        PaymentComponent,
        HomesearchComponent

    ],
  imports: [

      CommonModule,
      RouterModule.forChild(routes),
      DashboardsModule,
      FormsModule,
      ReactiveFormsModule,
      SearchModule
  ],exports :[

    ],
    providers:[
        CanActivateRoute
    ]

})


export class HomeModule { }
