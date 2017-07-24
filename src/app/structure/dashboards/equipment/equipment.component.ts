import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  @Output() selectedMdn = new EventEmitter<string>();

  constructor() { }

  equipmentModel = {};


  getTotalPICMonthlyfee():number{
        let totalPicMontlyFee:number = 0;
        this.equipmentJson.equipment_details.forEach((equipment)=>{
            totalPicMontlyFee = totalPicMontlyFee+equipment.ric_monthly_fee;
        })
        return totalPicMontlyFee;
  }

  getTotalPICRemainingCharges():number{
        let totalPICRemainingCharges:number = 0;
        this.equipmentJson.equipment_details.forEach((equipment)=>{
            totalPICRemainingCharges = totalPICRemainingCharges+equipment.ric_balance;
        })
        return totalPICRemainingCharges;
    }

   getTotalProtectionPlanCharges():number{
        let totalProtectionPlanCharges:number = 0;
        this.equipmentJson.equipment_details.forEach((equipment)=>{
            totalProtectionPlanCharges = totalProtectionPlanCharges+equipment.ric_balance;
        })
        return totalProtectionPlanCharges;
    }


  equipmentJson = {
            "equipment_details" :[
                  {
                      "mdn":"6476295429",
                      "device_description": "Apple IPhone 6S Black",
                      "first_name": "Karthik",
                      "last_name" : "Balakrishan",
                      "role" :"Primay",
                      "pin" : 1234,
                      "ric_active_indicator": true,
                      "ric_start_date": "10/31/2017" ,
                      "ric_end_date": "10/31/2018",
                      "ric_monthly_fee" : 120.00,
                      "ric_balance": 2200.00,
                      "protection_plan_charges": 220.00,
                      "upgrade_eligiblity_date": "10/31/2017",
                      "devfin_meid": "1234",
                      "pending_orders" : true,
                      "eligible_installment_subsidy":true,
                      "eu": "223421",
                      "ric_esn_active_indicator" : true,
                      "devfin_credit_limit":2400.00,
                      "last_credit_evaulation":"10/31/2017",
                      "devfin_credit_limit_available":2300.00
                  },
                  {
                      "mdn":"7272722833",
                      "device_description": "Apple Samsung 6S Black",
                      "first_name": "Karthik",
                      "last_name" : "Balakrishan",
                      "role" :"Primay",
                      "pin" : 1234,
                      "ric_active_indicator": true,
                      "ric_start_date": "10/31/2017" ,
                      "ric_end_date": "10/31/2018",
                      "ric_monthly_fee" : 120.00,
                      "ric_balance": 2200.00,
                      "protection_plan_charges": 220.00,
                      "upgrade_eligiblity_date": "10/31/2017",
                      "devfin_meid": "1234",
                      "pending_orders" : true,
                      "eligible_installment_subsidy":true,
                      "eu": "223421",
                      "ric_esn_active_indicator" : true,
                      "devfin_credit_limit":2400.00,
                      "last_credit_evaulation":"10/31/2017",
                      "devfin_credit_limit_available":2300.00
                  }
              ]
          };

  ngOnInit() {
      //this.equipmentModel = JSON.parse(this.equipmentJson);
  }

  onSelectMdn(selectedMdn){
      console.log("Select MDN" + selectedMdn);
  }
}
