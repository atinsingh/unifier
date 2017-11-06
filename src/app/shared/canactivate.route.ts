import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";


@Injectable()
export class CanActivateRoute implements CanActivate{

    constructor(private authenticationService:AuthenticationService, private router:Router){}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
        if(this.authenticationService.isLoggedIn()){
            return true;
        }else {
            this.router.navigate(['login']);
        }

    }
    //
    // canActivate(){
    //     return this.authenticationService.isLoggedIn();
    // }

}