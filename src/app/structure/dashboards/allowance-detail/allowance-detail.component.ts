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

  current:number = 85;
  max:number = 100;
  constructor(private accountService:AccountService, private config:RoundProgressConfig) {
      this.config.setDefaults({
         //background: '#2196f3',
         // background: '-webkit-linear-gradient(to right, #f44336, #2196f3)',
         // background: 'linear-gradient(to right, #f44336, #2196f3)',

  })
  }

  allowance;

  ngOnInit() {
      this.accountService.getSelectedAllowancePeriod().subscribe(
          (allowance)=>{
              this.allowance = allowance;

          }
      );

  }

  updateCircle(){
      this.allowance
  }
}
