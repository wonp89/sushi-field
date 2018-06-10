import { Component, OnInit } from "@angular/core";
import * as $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: `./header.component.html`,
    styleUrls: [`./header.component.css`]
})

export class HeaderComponent implements OnInit {

    toggleLogin() {
        let signinContainer = document.getElementById("signin-container");
        if (signinContainer.style.display == 'flex') {
            signinContainer.style.display = 'none';
        } else {
            signinContainer.style.display = 'flex';
        }
    }

    isLoggedOut() {
        return localStorage.getItem('token') == null;
    }

    ngOnInit() {
        $(document).ready(function () {
            $('#contact-link').click(function () { $('html, body').animate({ scrollTop: $(document).height() }, 500); }); 
        })
    }
}