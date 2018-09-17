import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject'



@Injectable()
export class DoService {
    url: string = "localhost"
    constructor(public http: Http) {

    }

    createDoService(data) {
        return this.http.post(this.url, data).map(res => res.json())
    }

    getActiveDosService() {
        return this.http.get(this.url +'/:id')
    }

    getAllDosService() {

    }

    getCompletedDosService() {

    }

    getDoByIDService() {

    }

    updateDoService() {

    }
}