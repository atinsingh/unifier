import {Component, Input, OnInit} from '@angular/core';
import {AccountService} from "../../../shared/account.service";
declare var $: any;
declare var jQuery: any;


@Component({
  selector: 'app-allowance-detail',
  templateUrl: './allowance-detail.component.html',
  styleUrls: ['./allowance-detail.component.css']
})
export class AllowanceDetailComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  allowance;

  ngOnInit() {
      this.accountService.getSelectedAllowancePeriod().subscribe(
          (allowance)=>{
              this.allowance = allowance;
              this.updateChart();
          }
      );

  }

  updateChart(){

          $("#circle").circliful({
              animationStep: 5,
              foregroundBorderWidth: 5,
              backgroundBorderWidth: 12,
              percent: 85
          });
   }
}
