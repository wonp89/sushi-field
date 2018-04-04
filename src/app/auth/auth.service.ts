import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { User } from "./user.model";
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx'; 

@Injectable()
export class AuthService {
    constructor(private http: Http) { }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.post('https://sushifield.herokuapp.com/user/signin', body, { headers: headers })
        .map((response: Response) => response.json())
        .catch((err: Response) => Observable.throw(err.json()))
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}