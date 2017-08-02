import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AccountService} from "../../../shared/account.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  billingData ;

  constructor(private accountService:AccountService, private route:ActivatedRoute, private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
      this.route.params.subscribe(
          (params:Params)=>{
              this.updateData();
          }
      )
      this.updateData();
  }


  updateData(){
      this.accountService.retrieveBillingData().subscribe(
          (response)=>{
              this.billingData = response.json();
              console.log("Got Billing Data"+JSON.stringify(response.json()));
              this.addPopover(this.billingData);
              this.accountService.updateBilling(this.billingData);
          }
      );

      this.cdRef.detectChanges();
  }

  addPopover(billingData){
      // $(function () {
      //     let content = '';
      //     for(let i = 0 ; i<billingData.last_payment.length;i++){
      //         content =  content+ '<div class="row"><div class = "col col-payment">'+billingData.last_payment[i].date+'</div><div class="col col-payment">'+billingData.last_payment[i].amount+'</div></div>';
      //     }
      //     $('#morepayment').popover(
      //         {
      //             placement: 'right',
      //             toggle: 'popover',
      //             title: 'LAST 3 PAYMENTS',
      //             html: true,
      //             content: content
      //         }
      //     );
      //     //   $("[data-toggle=popover]").popover();
      //     //   // $("[data-toggle=popover-hover]").popover({
      //     //   //   trigger: 'hover'
      //     //   // });
      //     //   //
      //     //   // $("[data-toggle=tooltip]").tooltip();
      //     //
      // });
  }
}
