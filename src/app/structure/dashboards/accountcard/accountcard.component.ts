import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-accountcard',
  templateUrl: './accountcard.component.html',
  styleUrls: ['./accountcard.component.css']
})
export class AccountcardComponent implements OnInit {
  
  customerData = {
    fistname:"Karthik",
    lastname : "Balakrishnan",
    contactNumber : "876-021-9107",
    pin : 1234,
    address : "123 6th St Melbournce FL 32904",
    status:"Active",
    plan : "Total Plans Consumer Mobile Phones",
    creditClass : "A",
    approvedLines : 20,
    activeSince : "March/10/13"
  }
  constructor() { }

  ngOnInit() {
  }

}
