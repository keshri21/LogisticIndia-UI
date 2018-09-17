import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject'


@Injectable()
export class UserService {

    constructor(public http: Http) {
        
    }
}