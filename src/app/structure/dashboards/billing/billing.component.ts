import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  billingData =  {
      billing_info : {
          last_billed_amount : 439.12,
          past_due_balance : 270.00,
          current_balance: 638.23,
          balance_due_date : "May/05/17",
          last_billed_date : "Aug/05/17",
          next_bill_cycle : "Sep/05/17"
      }
      ,
      last_payment :[
          {
              date: "May/05/17",
              amount:120.00
          },
          {
              date:null,
              amount:null
          },
          {
              date:null,
              amount:null
          }
      ]

  }

  constructor() { }

  ngOnInit() {
      let me  = this;
     $(function () {
         let content = '';
         for(let i = 0 ; i<me.billingData.last_payment.length;i++){
             content =  content+ '<div class="row"><div class = "col col-payment">'+me.billingData.last_payment[i].date+'</div><div class="col col-payment">'+me.billingData.last_payment[i].amount+'</div></div>';
         }
         $('#morepayment').popover(
             {
                 placement: 'right',
                 toggle: 'popover',
                 title: 'LAST 3 PAYMENTS',
                 html: true,
                 content: content
             }
         );
    //   $("[data-toggle=popover]").popover();
    //   // $("[data-toggle=popover-hover]").popover({
    //   //   trigger: 'hover'
    //   // });
    //   //
    //   // $("[data-toggle=tooltip]").tooltip();
    //
     });

  }

}
