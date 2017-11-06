import {AfterViewInit, Component,  OnInit} from '@angular/core';
import {AccountService} from "../../../shared/account.service";
import 'datatables.net';
import {setTimeout} from "timers";
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit, AfterViewInit {

    equipmentJson;

    datatable;


    constructor(private accountService:AccountService) { }



  getTotalPICMonthlyfee(equipment_details):number{
        let totalPicMontlyFee:number = 0;
        equipment_details.forEach((equipment)=>{
            totalPicMontlyFee = totalPicMontlyFee+equipment.ric_monthly_fee;
        })
        return totalPicMontlyFee;
  }

  getTotalPICRemainingCharges(equipment_details):number{
        let totalPICRemainingCharges:number = 0;
        equipment_details.forEach((equipment)=>{
            totalPICRemainingCharges = totalPICRemainingCharges+equipment.ric_balance;
        })
        return totalPICRemainingCharges;
    }

   getTotalProtectionPlanCharges(equipment_details):number{
        let totalProtectionPlanCharges:number = 0;
        equipment_details.forEach((equipment)=>{
            totalProtectionPlanCharges = totalProtectionPlanCharges+equipment.ric_balance;
        })
        return totalProtectionPlanCharges;
    }



  ngOnInit() {
        this.accountService.retrieveEquipment().subscribe(
            (response)=>{
                this.equipmentJson = response.json();
                this.onSelectMdn(this.equipmentJson[0].mdn);
                this.prepDataArray();
                this.initDataTable();
                 // console.log(" This is the data array "+ JSON.stringify(this.data));
            }
        );



  }

  ngAfterViewInit(){

  }
  onSelectMdn(selectedMdn){
      this.accountService.updateMdn(selectedMdn);
  }

  private initDataTable():void{
      let tableId  = $('#equipment');
      this.datatable = tableId.DataTable({
          "data": this.data,
          responsive:true,
          select:{
              style: 'single'
          },
          columns: [
              { data: 'mdn' },
              { data: 'name' },
              { data: 'pin' },
              { data: 'device_description' },
              { data: 'ric_start_date' },
              { data: 'ric_end_date' },
              { data: 'ric_monthly_fee'},
              { data: 'ric_balance' },
              { data: 'protection_plan_charges' },
              { data: 'upgrade_eligiblity_date' },
              { data: 'devfin_meid' }
          ]

      });
      this.datatable.on('select', (e,dt,type,indexes)=>{
          if ( type === 'row' ) {
              let rowData = this.datatable.rows(indexes).data().toArray();
              this.onSelectMdn(rowData[0].mdn);
          }
      });
  }


    /**
     *
     * Fix Data Tables Issue
     */

    private data = [];

    private  prepDataArray(){
        this.equipmentJson.forEach((equipment)=>{
            var dataObj = {
                mdn:null,
                name:null,
                pin:null,
                device_description:null,
                ric_start_date:null,
                ric_end_date:null,
                ric_monthly_fee:null,
                ric_balance:null,
                protection_plan_charges:null,
                upgrade_eligiblity_date:null,
                devfin_meid:null
            }
            dataObj.mdn = equipment.mdn;
            dataObj.name  = equipment.first_name+ ''+ equipment.last_name;
            dataObj.pin = equipment.pin;
            dataObj.device_description = equipment.device_description;
            dataObj.ric_start_date = equipment.ric_start_date;
            dataObj.ric_end_date = equipment.ric_end_date;
            dataObj.ric_balance = equipment.ric_balance;
            dataObj.ric_monthly_fee = equipment.ric_monthly_fee;
            dataObj.protection_plan_charges = equipment.protection_plan_charges;
            dataObj.upgrade_eligiblity_date = equipment.upgrade_eligiblity_date;
            dataObj.devfin_meid = equipment.devfin_meid;
            this.data.push(dataObj);
        });
    }



}
