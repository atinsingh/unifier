import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  
  searchTerm ="";

  constructor() { }
  
  ngOnInit() {
  }

  updateSearchTerm(event){
   this.searchTerm = event.target.value;
  }
}
