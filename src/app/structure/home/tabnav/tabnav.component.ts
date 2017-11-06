import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from "../../../shared/account.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-tabnav',
  templateUrl: './tabnav.component.html',
  styleUrls: ['./tabnav.component.css']
})
export class TabnavComponent implements OnInit, OnDestroy {

    accountId : number ;
    subscription:Subscription;
    constructor(private accountService:AccountService,private router:ActivatedRoute){

    }

    ngOnInit(){
        this.router.paramMap.subscribe(
          params=>{
              this.accountId=+params.get('id');
              this.accountService.updateAccountID(this.accountId);
             }
          );
       this.subscription =  this.accountService.getAccountID().subscribe(accountid =>{this.accountId=accountid});
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}
