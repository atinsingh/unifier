import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;


@Component({
  selector: 'app-allowance-detail',
  templateUrl: './allowance-detail.component.html',
  styleUrls: ['./allowance-detail.component.css']
})
export class AllowanceDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {

     (function() {
          $("#circle").circliful({
              animationStep: 5,
              foregroundBorderWidth: 5,
              backgroundBorderWidth: 12,
              percent: 85
          });
      })();
  }

}
