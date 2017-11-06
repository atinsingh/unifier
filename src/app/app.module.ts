import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router, NavigationStart, NavigationEnd, RouterModule } from '@angular/router';


import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { TopBarComponent} from './components/top-bar/top-bar.component';
import { MenuLeftComponent } from './components/menu-left/menu-left.component';
import { StructureModule } from './structure/structure.module';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchService } from "./shared/search.service";
import { AccountService } from "./shared/account.service";
import { AuthenticationService } from "./shared/authentication.service";
import { HttpModule} from "@angular/http";
import { LoginComponent } from './login/login.component';
import { AutogrowDirective } from './autogrow.directive';
import {SearchModule} from "./search/search.module";



declare var NProgress: any;

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        MenuLeftComponent,
        SearchbarComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        StructureModule,
        SearchModule,
        routing
    ],
    exports : [
    ],
    providers: [SearchService,AccountService, AuthenticationService],
    bootstrap: [ LoginComponent ]
})

export class AppModule {
  constructor(private router: Router) {
    // router.events.subscribe((event) => {
    //
    //   if(event instanceof NavigationStart) {
    //     NProgress.start();
    //   }
    //
    //   if(event instanceof NavigationEnd) {
    //     setTimeout(function(){
    //       NProgress.done();
    //     }, 0);
    //   }
    //
    // });
  }
}
