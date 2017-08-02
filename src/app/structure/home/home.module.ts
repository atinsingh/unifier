import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.page';
import {RouterModule, Routes} from "@angular/router";
import {DashboardsModule} from "../dashboards/dashboards.module";
import { TabnavComponent } from './tabnav/tabnav.component';
import {Dashboard} from "../dashboards/dashboard.page";
import { PaymentComponent } from './payment/payment.component';
import { HomesearchComponent } from './homesearch/homesearch.component';



export const routes: Routes = [
    {path : 'unifier/home', component:HomesearchComponent, pathMatch:'full'},
    { path: 'unifier/home/dashboard', component: HomeComponent,
        children : [
            {path:':id', component:Dashboard},
            {path :'payment/:id' , component:PaymentComponent}
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
      DashboardsModule
  ]

})


export class HomeModule { }
