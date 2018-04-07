import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Category } from './category.model'
import * as $ from 'jquery';

@Component({
    selector: 'app-menu-list',
    templateUrl: `./menu-list.component.html`,
    styleUrls: [`./menu-list.component.css`]
})

export class MenuListComponent implements OnInit {
    categories: Category[]
    public menuImages: any[]

    constructor(private menuService: MenuService) { }

    images() {
        const imageArray = []
        const imageTitles = ['Bliss Platter', 'Lunch Combo', 'CucumberWheel','Vege Tempura', 'House Sashimi', 'Rainbow Roll', "Kings Roll", 'Tuna Tataki', 'Sushi Pizza']
        for (let i = 0; i < 9; i++) {
            imageArray.push({ image: `./assets/menu${i}.png`, title: imageTitles[i]})
        }
        this.menuImages = imageArray
    }

    ngOnInit() {
        this.menuService.getMenu()
            .subscribe(
                (menus: any) => {
                    console.log("in getMenu subscription ", menus);
                    this.categories = menus
                }
            )
        
        this.images()

        $(document).ready(function () {
            $(window).bind('scroll', function () {
                if ($(window).scrollTop() > 38) {
                    $('.menu-heading-container').fadeOut();
                }
                else {
                    $('.menu-heading-container').fadeIn();
                }
            });
            
            $("#upButton").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        });
    }
}