import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject'
import { HttpHeaders } from '@angular/common/http'
import { HttpClient } from '@angular/common/http'


@Injectable()
export class LoginService {

    url = 'localhost';
    public isloginDone = new Subject<boolean>();

    constructor(public http: HttpClient) {

    }

    setLoginstatus(isloggedin) {
        this.isloginDone.next(isloggedin);
    }

    login(data) {
        return this.http.post(this.url + '/login', data).map(res => res)
    }
}