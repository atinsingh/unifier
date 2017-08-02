import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {SearchComponent} from "./structure/search/search/search.component";
import {HomeComponent} from "./structure/home/home/home.page";
import {Dashboard} from "./structure/dashboards/dashboard.page";
import {PaymentComponent} from "./structure/home/payment/payment.component";

export const routes: Routes = [
    { path: '', redirectTo: 'unifier/home', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages/page-404' },
    { path: 'search/:term', component: SearchComponent  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
