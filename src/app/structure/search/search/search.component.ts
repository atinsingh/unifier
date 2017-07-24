import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    term :string|number;
    constructor(private route:ActivatedRoute, private router:Router) {

  }



  ngOnInit() {
    this.route.params.subscribe(
        (param:Params)=>{
            this.term = param['term'];
        }
    )
  }

}
