import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
    selector: 'error',
    templateUrl: 'error.page.component.html'
})

export class ErrorPageComponent implements OnInit {
    ngOnInit() {
    }

    constructor(public userInfo: FormBuilder) {

    }
}
