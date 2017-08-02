import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SearchService} from "../../../shared/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homesearch',
  templateUrl: './homesearch.component.html',
  styleUrls: ['./homesearch.component.css']
})
export class HomesearchComponent implements OnInit, OnDestroy {

  @ViewChild('searchTerm') searchTerm :ElementRef;

  constructor(private searchService:SearchService, private router:Router) { }

  ngOnInit(){
    this.searchService.updateHomeSearch(true);
  }
  ngOnDestroy(){
      this.searchService.updateHomeSearch(false);
  }

    updateSearchTerm(){
        console.log(this.searchTerm.nativeElement.value);
        this.router.navigate(['search', this.searchTerm.nativeElement.value]);
    }

}
