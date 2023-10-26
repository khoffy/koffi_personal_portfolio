import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Contact } from "./contact.model";

@Injectable({
    providedIn: 'root'
})
export class RestService {
    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = 'https://xfgps5mrsh.execute-api.us-east-1.amazonaws.com/prod/message'
    }

    headers = new HttpHeaders({
        "Content-Type": "application/json"
    })
    saveMessage(contact: Contact): Observable<Contact> {
        return this.http.post<Contact>(this.baseUrl, contact, {headers: this.headers});
    }

}