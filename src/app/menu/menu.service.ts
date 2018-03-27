import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Menu } from './menu.model';

@Injectable()
export class MenuService {
    private menus: Menu[] = []
    menuIsEdit = new EventEmitter<Menu>()

    constructor(private http: Http) {}

    addMenu(menu: Menu) {
        const body = JSON.stringify(menu);
        const headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post('http://localhost:3000/menu', body, {headers: headers})
        .map((res: Response) => {
            const result = res.json();

            const menu = new Menu (
                result.name,
                result.price,
                result.about,
                result.category
            )
            this.menus.push(menu);
            return menu;
        })
    }
}


