import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-logout',
    template: `
         <button class="btn btn-default float-right" (click)="onLogout()">LOGOUT</button>
    `,
    styles: [`
    button {
        color: #dc3545;
        margin-right: 55px;
        margin-top: -8px;
    }
    `]
})

export class LogOutComponent {
    constructor(private authService: AuthService) { }
    onLogout() {
        this.authService.logout();
    }
}