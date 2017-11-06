import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {RetriveComponent} from "./structure/search/search/retrieve.component";
import {LoginComponent} from "./login/login.component";
import {CanActivateRoute} from "./shared/canactivate.route";

export const routes: Routes = [
    { path:'login', component:LoginComponent },
    { path: '', redirectTo: 'unifier/home', pathMatch: 'full', canActivate:[CanActivateRoute] },
    { path: '**', redirectTo: 'pages/page-404' },
    { path: 'search/:term', component: RetriveComponent  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
