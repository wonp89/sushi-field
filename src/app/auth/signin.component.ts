import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
    selector: 'app-signin',
    templateUrl:'./signin.component.html',
    styleUrls: [`./signin.component.css`]
})

export class SignInComponent {
    constructor(private authService: AuthService) {}

    onSubmit(form: NgForm) {
        const user = new User(
            form.value.username,
            form.value.password
        )
        this.authService.signin(user)
        .subscribe(
            data => {
                localStorage.setItem('token', data.token)
            },
            error => console.log(error)
        );
        form.reset();
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

}