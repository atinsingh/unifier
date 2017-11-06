import { Component, OnInit} from '@angular/core';
import {AccountService} from "../../../shared/account.service";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerModel} from "../../../models/customer.model";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

    /**
     * Define form
     */

    private paymentForm:FormGroup;

    /**
     * Define Form Fields
     */



    customerData:CustomerModel;




    constructor(private  acccoutService:AccountService) { }

    ngOnInit() {
      this.customerData = this.acccoutService.getCustomerData();
      this.initForm();
    }

    private initForm(){
        this.paymentForm = new FormGroup({
            'payment_method'    : new FormControl('credit'),
            'cc-number'         : new FormControl(),
            'cc-name'           : new FormControl(this.customerData.firstname+" "+this.customerData.lastname),
            'cc-exp'            : new FormControl(),
            'x-card_code'       : new FormControl(),
            'x-zip'             : new FormControl(),
            'x-amount'          : new FormControl()
        });
    }



}
