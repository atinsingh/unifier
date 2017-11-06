import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Router} from "@angular/router";
import {Response} from "@angular/http";

import {SearchService} from "../../../shared/search.service";
import {AccountService} from "../../../shared/account.service";

@Component({
  selector: 'app-search',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetriveComponent implements OnInit {

    term :string|number;
    searchObj : {}|false;
    invalid:boolean= false;
    constructor(private route:ActivatedRoute,
                private router:Router,
                private searchService:SearchService,
                private accountService:AccountService
                ) {}



  ngOnInit() {
    this.route.params.subscribe(
        (param:Params)=>{
            this.term = +param['term']||0;

            if(typeof  this.term === 'number' && this.term!=0) {
                let length =  this.term.toString().length
                console.log("lEngth is "+length);
                if(length===9){
                    this.retrieveByAccountId(this.term);
                    this.invalid = false;
                }else if(length===10){
                    this.retrivebyMDN(this.term);
                    this.invalid = false;
                }else {
                    this.invalid = true;
                }
            }else {
                this.invalid = false;
                this.search();
            }

        }
    )

  }

  search() {
       this.searchService.searchCustomer(this.term).subscribe(
           (response :Response)=>{
               this.searchObj = response.json();
           },
           (error)=>{
               console.log(error);
           }
       )
  }

    retrieveByAccountId(customerId:number){
        console.log("Updating subject to "+customerId);
        this.accountService.updateAccountID(customerId);
       // this.accountService.setSelectedAccount(customerId);
        this.router.navigate(['unifier/home','dashboard', customerId]);
    }

    retrivebyMDN(mdn:number){
        console.log(mdn);
    }

    selectAccount(accountid){
        this.accountService.updateAccountID(accountid);
        // this.accountService.setSelectedAccount(accountid);
        this.router.navigate(['unifier/home','dashboard', accountid]);
    }
}

//https://unifier-moc.firebaseio.com/