import { Injectable } from "@angular/core";

@Injectable()
export class Contact {
    public name?: string;
    public email?: string;
    public telephone?: string;
    public message?: string;

    constructor() {}

    clear() {
        this.name = undefined;
        this.email = this.telephone = this.message = undefined;
    }
}