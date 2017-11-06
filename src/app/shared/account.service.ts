import {Subject} from "rxjs/Subject";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs';

import {Config} from "../config/app.config";
import {CustomerModel} from "../models/customer.model";

@Injectable()
export class AccountService {

    /**
     * Proerties
     * @type {Subject<number>}
     */

    /**
     * These URL should come from config
     * @type {Subject<number>}
     */



    private accountSubject = new Subject<number>();
    private customerData:CustomerModel ;
    private selectedAccount:number;
    private billingSubject:Subject<any> = new Subject<any>();
    private selectedMDn = new Subject();
    private allowancePeriod = new Subject();
    private  chargePeriod = new Subject();


    constructor(private  http: Http) {
        this.accountSubject.subscribe((accountId)=>{this.selectedAccount=accountId});
    }

    retrieveCustomerByAccount(accountid) {
        console.log("Calling Every this with following "+ Config.accountURL+accountid);
        return this.http.get(Config.accountURL+accountid)
            .map(response => response.json());
    }

    // getSelectedAccount(){
    //     return this.selectedAccount;
    // }
    // setSelectedAccount(accountID){
    //     this.selectedAccount = accountID;
    // }

    getAccountID(): Observable<any> {
        return this.accountSubject.asObservable();
    }

    updateAccountID(id:number){
        this.accountSubject.next(id);
    }


    /**
     * Retrive Billing Data for the account, function will take account id as argument
     */

     retrieveBillingData(){
        return this.http.get('http://localhost:2020/billing/'+this.selectedAccount);
     }

    /**
     *
     * @param billingData
     */

     updateBilling(billingData){
         this.billingSubject.next(billingData);
     }

    /**
     *
     * @returns {Observable<any>}
     */

     getBillingData():Observable<any>{
            return this.billingSubject.asObservable();
     }


    /***
     * Equipment Service
     */

    retrieveEquipment(){
        return this.http.get('http://localhost:2020/equipment/'+this.selectedAccount);
    }

    updateMdn(mdn){
        this.selectedMDn.next(mdn);
    }

    getSelectedMdn(){
        return this.selectedMDn.asObservable();
    }


    /**
     *
     * @param mdn
     * @returns {Observable<Response>}
     */

    retrieveAllowance(mdn){
        return this.http.get('http://localhost:2020/allowances/'+mdn);
    }

    /**
     *
     * @param allwance
     */

    updateAllowancePeriod(allwance){
        this.allowancePeriod.next(allwance);
    }

    /**
     *
     * @returns {Observable<any>}
     */
    getSelectedAllowancePeriod(){
        return this.allowancePeriod.asObservable();
    }

    retrieveCharges(mdn){
        return this.http.get('http://localhost:2020/charges/'+mdn);
    }


    updateChargePeriod(charges){
        this.chargePeriod.next(charges);
    }

    getSelectChargePeriod(){
        return this.chargePeriod.asObservable();
    }

    updateCustomerData(customerData:CustomerModel){
        this.customerData = customerData;
    }

    getCustomerData():CustomerModel{
        return this.customerData;
    }

}
