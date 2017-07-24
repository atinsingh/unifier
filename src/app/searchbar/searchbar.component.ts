import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'search-bar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  
  @ViewChild('searchTerm') searchTerm :ElementRef;

  constructor(private router:Router) { }
  
  ngOnInit() {
  }

  updateSearchTerm(){
      console.log(this.searchTerm.nativeElement.value);
      this.router.navigate(['search', this.searchTerm.nativeElement.value]);
 }
}
