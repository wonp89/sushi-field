import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MenuService } from './menu.service';
import { Menu } from './menu.model'

@Component({
    selector: 'app-menu-input',
    templateUrl: './menu-input.component.html',
    styleUrls: ['./menu-input.component.css']
})

export class MenuInputComponent implements OnInit {
    menu: Menu;
    categoriesList: String[] = ["Appetizer", "Sushi", "Tempura", "Noodle"];

    constructor(private menuService: MenuService) { }

    onSubmit(form: NgForm) {
        if (this.menu) {
            const oldMenu = this.menu
            let updatedMenu = {
                name: form.value.name,
                price: form.value.price,
                about: form.value.about,
                category: form.value.category,
                _id: oldMenu._id
            }
            this.menuService.updateMenu(oldMenu, updatedMenu)
                .subscribe(
                    result => {
                        console.log('updateMenu', result);
                        this.menuService.insertIntoList(oldMenu, updatedMenu)
                        this.menu = null;
                    }
                );
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

    onClear(form: NgForm) {
        this.menu = null;
        form.resetForm();
    }
  
    toggleInput() {
        console.log(this.menu)
        let button = document.getElementById("toggle-button");
        let form = document.getElementById("form-container");
        if (form.style.display == 'block') {
            form.style.display = 'none';
            button.style.paddingBottom = '50px';
        } else {
            this.menu = null;
            form.style.display = 'block';
            button.style.paddingBottom = '20px';
        }
    }

    ngOnInit() {
        this.menuService.menuIsEdit
            .subscribe(
                (menu: Menu) => {
                    this.menu = menu;
                })
    }
}
