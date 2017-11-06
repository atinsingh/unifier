export class SearchData {

    private _last_name:string;
    private _fa_account:number;
    private _customer_id:number;


    constructor(last_name: string, fa_account: number, customer_id: number) {
        this._last_name = last_name;
        this._fa_account = fa_account;
        this._customer_id = customer_id;
    }


    get last_name(): string {
        return this._last_name;
    }

    set last_name(value: string) {
        this._last_name = value;
    }

    get fa_account(): number {
        return this._fa_account;
    }

    set fa_account(value: number) {
        this._fa_account = value;
    }

    get customer_id(): number {
        return this._customer_id;
    }

    set customer_id(value: number) {
        this._customer_id = value;
    }
}