import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "../shared/search.service";

@Component({
  selector: 'search-bar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchHome = false;

  @ViewChild('searchTerm') searchTerm :ElementRef;

  constructor(private router:Router, private searchService:SearchService) { }
  
  ngOnInit() {
      this.searchService.getHomeSearch().subscribe(
          (searchHome)=>{
              this.searchHome = searchHome;
          }
      );
  }

  updateSearchTerm(){
      console.log(this.searchTerm.nativeElement.value);
      this.router.navigate(['search', this.searchTerm.nativeElement.value]);
 }
}
