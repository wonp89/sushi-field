import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Category } from './category.model'

@Component({
    selector: 'app-menu-list',
    template: `
            <app-menu
                [category]="category"
                *ngFor="let category of categories"
            >
            </app-menu>
    `
})

export class MenuListComponent implements OnInit {
    categories: Category[]

    constructor(private menuService: MenuService) {}

    ngOnInit() {
        this.menuService.getMenu()
            .subscribe(
                (menus: any[]) => {
                    this.categories = menus
                }
            )
    }
}