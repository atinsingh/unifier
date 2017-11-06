import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,  Params} from "@angular/router";
import {AccountService} from "../../../shared/account.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})


export class HomeComponent implements OnInit {

  constructor(private router:ActivatedRoute,private accountService:AccountService) { }

  ngOnInit() {
      this.router.params.subscribe(
          (params:Params)=>{
              // console.log("Logging change in param" + params['id']);
              let customerId = +params['id'];
              this.accountService.updateAccountID(customerId);

          }
      );
  }

}
