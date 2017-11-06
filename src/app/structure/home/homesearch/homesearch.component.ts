import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SearchService} from "../../../shared/search.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SearchData} from "../../../models/searchdata.model";

@Component({
  selector: 'app-homesearch',
  templateUrl: './homesearch.component.html',
  styleUrls: ['./homesearch.component.css']
})
export class HomesearchComponent implements OnInit, OnDestroy {

  // searchTerm :string;
  //
  // //Switching to Forms now
  //
  // searchField : FormControl;
  // searchForm  : FormGroup;
  // searchData:SearchData[] =[];
  // autoHide = {hide:false};
  //
  constructor(private searchService:SearchService) { }
  //
  ngOnInit(){

    // Observe the change in the serch bar and then do the search every 1000 ms
    // populate back the drop down with search result.

    this.searchService.updateHomeSearch(true)

  }
  //
  //
  ngOnDestroy(){
      this.searchService.updateHomeSearch(false);
  }
  //
  // // updateSearchTerm(){
  // //       console.log(this.searchTerm.nativeElement.value);
  // //       this.router.navigate(['search', this.searchTerm.nativeElement.value]);
  // // }
  //
  // onFocus(){
  //     if(this.searchField.value!==''){
  //         this.autoHide.hide = false;
  //     }else{
  //         this.autoHide.hide = true;
  //     }
  // }
  //
  // onFocusOut(){
  //   //  this.autoHide.hide = true;
  // }

  // public onSelectAccount(searchObj:SearchData):void{
  //     this.searchField.setValue(searchObj.fa_account);
  //     console.log(searchObj)
  //     this.autoHide.hide = true;
  //     //this.router.navigate(['unifier/home','dashboard', searchObj.fa_account]);
  // }
  //
  // onClick(){
  //     console.log("Item Selected");
  // }


}
