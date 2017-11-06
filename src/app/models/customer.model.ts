export class CustomerModel {

    private _firstname:string;
    private _lastname: string;
    private _contactNumber: string;
    private _pin: number;
    private _address: string;
    private _status: string;
    private _plan: string;
    private _creditClass: string;
    private _approvedLines:number;
    private _activeSince: string;


    constructor(firstname: string, lastname: string, contactNumber: string, pin: number, address: string, status: string, plan: string, creditClass: string, approvedLines: number, activeSince: string) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._contactNumber = contactNumber;
        this._pin = pin;
        this._address = address;
        this._status = status;
        this._plan = plan;
        this._creditClass = creditClass;
        this._approvedLines = approvedLines;
        this._activeSince = activeSince;
    }


    get firstname(): string {
        return this._firstname;
    }

    set firstname(value: string) {
        this._firstname = value;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    get contactNumber(): string {
        return this._contactNumber;
    }

    set contactNumber(value: string) {
        this._contactNumber = value;
    }

    get pin(): number {
        return this._pin;
    }

    set pin(value: number) {
        this._pin = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get plan(): string {
        return this._plan;
    }

    set plan(value: string) {
        this._plan = value;
    }

    get creditClass(): string {
        return this._creditClass;
    }

    set creditClass(value: string) {
        this._creditClass = value;
    }

    get approvedLines(): number {
        return this._approvedLines;
    }

    set approvedLines(value: number) {
        this._approvedLines = value;
    }

    get activeSince(): string {
        return this._activeSince;
    }

    set activeSince(value: string) {
        this._activeSince = value;
    }
}