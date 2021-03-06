import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    ngOnInit() {
        $(document).ready(function () {
            $(window).bind('scroll', function () {
                if ($(window).scrollTop() > 38) {
                    $('.home-heading-container').fadeOut();
                }
                else {
                    $('.home-heading-container').fadeIn();
                }
            });

            $(window).scroll(function () {
                let scrollTop = $(this).scrollTop();
                $('.parallax-bg').css('top', -(scrollTop * 0.2) + 'px')
            })

            $("#upButton").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        });
    }
}