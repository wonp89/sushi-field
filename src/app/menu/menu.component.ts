import { Component, Input } from '@angular/core';
import { Category } from './category.model'
import { Menu } from './menu.model'
import { MenuService } from './menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent {
    constructor(private menuService: MenuService) { }

    @Input() category: Category;

    onEdit(menu) {
        this.toggleInput()
        this.menuService.editMenu(menu)
    }

    onDelete(menu) {
        if (confirm("Are you sure you really want to delete this menu?")) {
            this.menuService.deleteMenu(menu)
                .subscribe(
                    result => console.log(result)
                )
        }
    }

    toggleInput() {
        let button = document.getElementById("toggle-button");
        let form = document.getElementById("form-container");
        form.style.display = 'block';
        button.style.paddingBottom = '20px';
    }

    isLoggedIn() {
        return this.menuService.isLoggedIn();
    }
    
}
