import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable'
import { HttpHeaders } from '@angular/common/http'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class DoService {
    url: string = "localhost"
    constructor(public http: HttpClient) {

    }

    createDoService(data): Observable<any> {
        return this.http.post(this.url + '/do', data).map(res => res);
    }

    getActiveDosService(): Observable<any> {
        return this.http.get(this.url + '/do/active', {
            headers: new HttpHeaders({
                'content-type': 'application/json',
                'token': localStorage.getItem('token')
            })
        }).map(res => res);
    }

    getAllDosService(): Observable<any> {
        return this.http.get(this.url + '/do').map(res => res);
    }

    getCompletedDosService(): Observable<any> {
        return this.http.get(this.url + '/do/completed').map(res => res);
    }

    getDoByIDService(id): Observable<any> {
        return this.http.get(this.url + '${id}').map(res => res);
    }

    updateDoService(data): Observable<any> {
        return this.http.put(this.url + '${id}', data).map(res => res);
    }
}