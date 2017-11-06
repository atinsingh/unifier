import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SearchService} from "../../shared/search.service";

@Component({
  selector: 'cat-top-bar',
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent implements OnInit {
    homepage:boolean = false;

    updateHomePage(event){
        console.log("Event is "+ event.toString());
    }
    constructor(private _searchService:SearchService){}

    ngOnInit(){
        this._searchService.getHomeSearch().subscribe(
            (sarchpage)=>{this.homepage = sarchpage}
        )
    }
}
