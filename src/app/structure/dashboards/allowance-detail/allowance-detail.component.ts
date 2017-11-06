import {Component, Input, OnInit} from '@angular/core';
import {RoundProgressConfig} from "angular-svg-round-progressbar";
import {AccountService} from "../../../shared/account.service";


declare var $: any;
declare var jQuery: any;


@Component({
  selector: 'app-allowance-detail',
  templateUrl: './allowance-detail.component.html',
  styleUrls: ['./allowance-detail.component.css']
})
export class AllowanceDetailComponent implements OnInit {
    /**
     * Member Variable
     * @type {number}
     */

      current:number=0;
      max:number = 100;
      @Input() allowance;

  constructor(private accountService:AccountService, private config:RoundProgressConfig) {
      this.config.setDefaults({
         //background: '#2196f3',
         // background: '-webkit-linear-gradient(to right, #f44336, #2196f3)',
         // background: 'linear-gradient(to right, #f44336, #2196f3)',
    });
  }



  ngOnInit() {
      this.current = (+this.allowance.used/+this.allowance.allowance)*100;
      this.accountService.getSelectedAllowancePeriod().subscribe(
          (allowance)=>{
              // console.log("Account details component with value "+allowance)
              this.allowance = allowance;
              this.updateCircle();
          }
      );


  }

  updateCircle(){
      this.current = (+this.allowance.used/+this.allowance.allowance)*100;
  }
}
