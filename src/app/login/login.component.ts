import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private isAuthenticated:boolean = false;
    private loginForm:FormGroup;

    constructor(private authService:AuthenticationService, private fb:FormBuilder, private router:Router) {


        this.loginForm = fb.group({
            username: ['', Validators.required],
            userpass: ['', Validators.required]
        });
    }

    ngOnInit() {
     this.isAuthenticated = false;
     if(this.isAuthenticated){
         this.router.navigate(['']);
     }
    }

    authorizeUser(){
        console.log("User trying to log "+ this.loginForm.get('username').value);
        this.isAuthenticated = this.authService.doLogin();
        this.router.navigate(['unifier','home']);
     }
}
