
import {Injectable} from "@angular/core";

@Injectable()
export class AuthenticationService {

    loggedIn = false;

    constructor(){

    }

    /**
     * Simple mock authentication Module
     */

    doLogin():boolean {
        this.loggedIn = true;
        return this.loggedIn;
    }

    /**
     * Simple logout function
     */

    doLogOut():void {
        this.loggedIn = false;
    }

    /**
     * Simple function to check if login is true
     */

    isLoggedIn():boolean {
        return this.loggedIn;
    }
}