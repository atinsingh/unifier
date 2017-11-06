import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SearchData} from "../models/searchdata.model";
import {SearchService} from "../shared/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    @Input() enableButton:boolean = false;
    searchTerm :string;

    @Input() searchPage:boolean = false;


    //Switching to Forms now

    searchField : FormControl;
    searchForm  : FormGroup;
    searchData:SearchData[] =[];
    autoHide = {hide:false};

    constructor(private searchService:SearchService, private router:Router, private fb:FormBuilder) {

        this.searchField = new FormControl();

        this.searchForm = fb.group({search:this.searchField});
    }

    ngOnInit(){

        // Observe the change in the serch bar and then do the search every 1000 ms
        // populate back the drop down with search result.

        this.searchService.updateHomeSearch(true)

        this.searchField.valueChanges.debounceTime(1000).switchMap(
            (term)=> {
                return this.searchService.searchAccount(term);
            }
        ).subscribe(
            (data)=> {
                this.searchData = data
            }
        );
    }


    ngOnDestroy(){
        this.searchService.updateHomeSearch(false);
    }

    // updateSearchTerm(){
    //       console.log(this.searchTerm.nativeElement.value);
    //       this.router.navigate(['search', this.searchTerm.nativeElement.value]);
    // }

    onFocus(){
        if(this.searchField.value!==''){
            this.autoHide.hide = false;
        }else{
            this.autoHide.hide = true;
        }
    }

    onFocusOut(){
        //  this.autoHide.hide = true;
    }

    public onSelectAccount(searchObj:SearchData):void{
        this.searchField.setValue(searchObj.fa_account);
        console.log(searchObj)
        this.autoHide.hide = true;
        this.router.navigate(['unifier/home','dashboard', searchObj.fa_account]);
    }

    onClick(){
        console.log("Item Selected");
    }


}
