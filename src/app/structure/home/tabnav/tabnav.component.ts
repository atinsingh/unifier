import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../shared/account.service";


@Component({
  selector: 'app-tabnav',
  templateUrl: './tabnav.component.html',
  styleUrls: ['./tabnav.component.css']
})
export class TabnavComponent implements OnInit {

    accountId : number;

    constructor(private accountService:AccountService){

    }

    ngOnInit(){
        this.accountService.getAccountID().subscribe(accountid =>{this.accountId=accountid});
    }

}
