import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MenuService } from './menu.service';
import { Menu } from './menu.model'


@Component({
    selector: 'app-menu-input',
    templateUrl: './menu-input.component.html'
})

export class MenuInputComponent {
    menu: Menu;

    constructor (private menuService: MenuService) {}

    onSubmit(form: NgForm) {
        const menu = new Menu(
            form.value.name,
            form.value.price,
            form.value.about,
            form.value.category
        );
        this.menuService.addMenu(menu)
        .subscribe(
          data => console.log(data),
          error => console.error(error)  
        );

        form.resetForm();
    }
}