import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./shared/authentication.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    providers : []
})
export class AppComponent implements OnInit{
    private authenticated = false;
    constructor(private authservice:AuthenticationService){

    }
    ngOnInit(){
        this.authenticated =  this.authservice.loggedIn;
    }
}
