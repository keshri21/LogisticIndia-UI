import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { LoginService } from '../../services/login.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    //   styleUrls: ['./app-raise-bill.css']
})
export class LoginComponent implements OnInit {

    constructor(private fb: FormBuilder, private loginService: LoginService, private toastr: ToastrService, private router: Router) { }

    ngOnInit() {
    }

    @Output() showsidebar = new EventEmitter<any>();

    loginForm = this.fb.group({
        userName: [],
        password: [],
        company: []
    })

    changeViewOnloggedIn(status) {
        this.showsidebar.emit(status);
    }

    isloggedIn() {
        return localStorage.getItem('currentUser');
    }

    submitLogin() {
        console.log(this.loginForm.get('userName').value)
        if (this.loginForm.get('userName').value == null ||
            this.loginForm.get('password').value == null ||
            this.loginForm.get('company').value == null) {
            this.toastr.error("Form is invalid");
            return;
        }

        this.changeViewOnloggedIn(true);
        this.router.navigate(['/createdo']);
        localStorage.setItem('currentUser', 'true');

        this.loginService.login({

        }).subscribe(
            (data) => {
                //change the view.
                //navigate to the respective route on the basis of role.
                //set a value in local storage that user is logged in.
                //set the token to storage
                //set the role to storage.

            },
            (error) => {

            })
    }
}
