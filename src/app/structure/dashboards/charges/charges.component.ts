import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../shared/account.service";

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit {

    mdn;
    charges;

    constructor(private  accountService:AccountService) { }

    ngOnInit() {

      this.accountService.getSelectedMdn().subscribe(
          (mdn)=>{
              this.mdn=mdn;
              this.accountService.retrieveCharges(mdn).subscribe(
                  (response)=>{
                      this.charges = response.json();
                      this.selectChargesPeriod(this.charges[0]);

                  }
              )
          }
      );

    }

    selectChargesPeriod(charge){
        this.accountService.updateChargePeriod(charge);
    }
}
