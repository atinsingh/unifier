import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../shared/account.service";

@Component({
  selector: 'app-charge-detail',
  templateUrl: './charge-detail.component.html',
  styleUrls: ['./charge-detail.component.css']
})
export class ChargeDetailComponent implements OnInit {

  constructor(private  accountService:AccountService) { }

  charge;

  ngOnInit() {
    this.accountService.getSelectChargePeriod().subscribe(
        (charge)=>{
          this.charge = charge;
        }
    )
  }

}
