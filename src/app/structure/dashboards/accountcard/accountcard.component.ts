import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-accountcard',
  templateUrl: './accountcard.component.html',
  styleUrls: ['./accountcard.component.css']
})
export class AccountcardComponent implements OnInit, OnDestroy {


  subscribe : Subscription;

  @Input() customerData;

  constructor() { }

  ngOnInit() {

  }



  ngOnDestroy(){

  }

}
