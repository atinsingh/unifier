import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, NavigationStart, NavigationEnd, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { TopBarComponent} from './components/top-bar/top-bar.component';
import { MenuLeftComponent } from './components/menu-left/menu-left.component';

import { StructureModule } from './structure/structure.module';
import { SearchbarComponent } from './searchbar/searchbar.component';


declare var NProgress: any;

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        MenuLeftComponent,
        SearchbarComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        StructureModule,
        NgbModule.forRoot(),
        routing
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(private router: Router) {
    router.events.subscribe((event) => {

      // if(event instanceof NavigationStart) {
      //   NProgress.start();
      // }
      //
      // if(event instanceof NavigationEnd) {
      //   setTimeout(function(){
      //     NProgress.done();
      //   }, 200);
      // }

    });
  }
}
