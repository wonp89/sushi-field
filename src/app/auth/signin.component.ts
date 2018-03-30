import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
    selector: 'app-signin',
    template:`
        <div>
            <form (ngSubmit)="onSubmit(f)" #f="ngForm" class="d-inline" *ngIf="!isLoggedIn()">
            <label>Login</label>
                 <input type="text" id="username" ngModel name="username" required>
                 <input type="text" id="password" ngModel name="password" required>
                 <button class="btn btn-primary" type="submit" [disabled]="!f.valid">Login</button>
            </form>
            <app-logout *ngIf="isLoggedIn()"></app-logout>
        </div>
        <br>
    `
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