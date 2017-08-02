import {AfterViewInit, Component,  OnInit} from '@angular/core';
import {AccountService} from "../../../shared/account.service";
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit, AfterViewInit {


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


  equipmentJson;

  ngOnInit() {
        this.accountService.retrieveEquipment().subscribe(
            (response)=>{
                this.equipmentJson = response.json();
                this.onSelectMdn(this.equipmentJson[0].mdn);
            }
        );
          // $('#equipment').DataTable({
          //     responsive: true
          // });

  }

  ngAfterViewInit(){
      $('#equipment').DataTable({
          responsive: true,
          select :true
      });
  }
  onSelectMdn(selectedMdn){
      console.log("Selected MDN "+selectedMdn);
      this.accountService.updateMdn(selectedMdn);
  }
}
