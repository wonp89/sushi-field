import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MenuService } from './menu.service';
import { Menu } from './menu.model'


@Component({
    selector: 'app-menu-input',
    templateUrl: './menu-input.component.html',
    styles: [`
        form {
            margin: auto;
        }
    `]
})

export class MenuInputComponent implements OnInit {
    menu: Menu;
    categoriesList: String[] = ["Appetizer", "Sushi", "Tempura", "Noodle"];

    constructor(private menuService: MenuService) { }

    onSubmit(form: NgForm) {
        if (this.menu) {
            this.menuService.deleteFromOriginalCategory(this.menu)
            this.menu.name = form.value.name;
            this.menu.price = form.value.price;
            this.menu.about = form.value.about;
            this.menu.category = form.value.category;
            this.menuService.updateMenu(this.menu)
                .subscribe(
                    result => console.log(result)
                );
            this.menu = null;
        } else {
            const menu = new Menu(
                form.value.name,
                form.value.price,
                form.value.about,
                form.value.category,
                '123'
            );
            this.menuService.addMenu(menu)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
        }

        form.resetForm();
    }

    isLoggedIn() {    
        return this.menuService.isLoggedIn();
    }

    ngOnInit() {
        this.menuService.menuIsEdit
            .subscribe(
                (menu: Menu) => this.menu = menu
            )
    }
}
