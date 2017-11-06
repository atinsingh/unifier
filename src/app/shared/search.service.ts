import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Subject} from "rxjs/Subject";
import {SearchData} from "../models/searchdata.model";
import  { Config } from "../config/app.config";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class SearchService{

    private searchHome:BehaviorSubject<boolean> = new BehaviorSubject(true);

    constructor(private http:Http){}

    searchCustomer(searchTem) :any {
        return this.http.get('https://unifier-moc.firebaseio.com/customer.json');
    }

    updateHomeSearch(homepage:boolean){
        this.searchHome.next(homepage);
    }

    getHomeSearch(){
        return this.searchHome.asObservable();
    }



    /**
     *  Fuction will call Search MS and will get the Array of Search Object.
     *  Search Object will have { LastName, BA_Account and Customer_Id for .
     *  Fucntion will return an Obeserable to calling App can use the observable
     * @param {string} searchTerm
     * @returns {Observable<SearchData[]>}
     */
    searchAccount(searchTerm:string):Observable<SearchData[]> {
       return this.http.get(Config.searchURL+searchTerm).map(
            (response)=>{
                return response.json();
            }
        )
    }

}