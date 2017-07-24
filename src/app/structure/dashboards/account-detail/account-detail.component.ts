import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  @Input() customerData:any ={};
  constructor() { }

  ngOnInit() {
  }

}
