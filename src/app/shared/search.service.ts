import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Subject} from "rxjs/Subject";

@Injectable()
export class SearchService{

    private searchHome = new Subject<boolean>();

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


}