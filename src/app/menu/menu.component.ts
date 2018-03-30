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
        this.menuService.editMenu(menu)
    }

    onDelete(menu) {
        this.menuService.deleteMenu(menu)
        .subscribe(
            result => console.log(result)
        )
    }

    isLoggedIn() {    
        return this.menuService.isLoggedIn();
    }
}
