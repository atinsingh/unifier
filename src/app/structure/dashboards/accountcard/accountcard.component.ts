import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from "../../../shared/account.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-accountcard',
  templateUrl: './accountcard.component.html',
  styleUrls: ['./accountcard.component.css']
})
export class AccountcardComponent implements OnInit, OnDestroy {

  customerId:number|string ;

  subscribe : Subscription;

  customerData = {}

  constructor(private accountService:AccountService, private route : ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(
          (params:Params)=>{
            console.log("Logging change in param" + params['id']);
            this.customerId = +params['id'];
            this.accountService.updateAccountID(this.customerId);

            this.updateCard();
          }
      );

      this.subscribe = this.accountService.getAccountID().subscribe(
          id=>{
              this.customerId = id;
          }
      );

      this.updateCard();


  }

  updateCard(){
      this.accountService.retrieveCustomerByAccount().subscribe(
          (response)=>{
              console.log("Got Response from Local Server"+ JSON.stringify(response.json())) ;
              this.customerData = response.json();
          }
      );

  }

  ngOnDestroy(){
      this.subscribe.unsubscribe();
  }

}
