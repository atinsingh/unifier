import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../shared/account.service";

@Component({
  selector: 'app-current-balance',
  templateUrl: './current-balance.component.html',
  styleUrls: ['./current-balance.component.css']
})
export class CurrentBalanceComponent implements OnInit {

  billingData;
  constructor(private accountService:AccountService) { }

  ngOnInit() {
      console.log("current billlingLoaded");
    this.accountService.getBillingData().subscribe(
        (billingData)=>{
           // console.log("Current Balance Component " + JSON.stringify(billingData));
           this.billingData = billingData;
        }
    )
  }

}
