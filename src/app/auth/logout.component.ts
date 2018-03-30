import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-logout',
    template: `
         <button class="btn btn-danger" (click)="onLogout()">Logout</button>
    `
})

export class LogOutComponent {
    constructor(private authService: AuthService) {}
    onLogout() {
        this.authService.logout();
    } 
}