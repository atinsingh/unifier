import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../shared/account.service";

@Component({
  selector: 'app-allowances',
  templateUrl: './allowances.component.html',
  styleUrls: ['./allowances.component.css']
})
export class AllowancesComponent implements OnInit {
   mdn;

   allowances;

   constructor(private  accountSevice:AccountService) { }

    ngOnInit() {
    this.accountSevice.getSelectedMdn().subscribe(
        (mdn)=>{
            this.mdn=mdn;
            this.accountSevice.retrieveAllowance(mdn).subscribe(
                (response)=>{
                    this.allowances = response.json();
                    console.log("Got following from allowances"+ JSON.stringify(response.json()));
                    this.accountSevice.updateAllowancePeriod(this.allowances[0]);
                }
            )
        }
    );
  }

    selectAllowancePeriod(allowance){
       this.accountSevice.updateAllowancePeriod(allowance);
    }

}
