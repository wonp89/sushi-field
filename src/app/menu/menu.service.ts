import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Menu } from './menu.model';

@Injectable()
export class MenuService {
    private menus: Menu[] = []

    constructor(private http: Http) {}

    addMenu(menu: Menu) {
        const body = JSON.stringify(menu);
        const headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post('http://localhost:3000/menu', body, {headers: headers})
        .map((res: Response) => {
            const result = res.json();
            //select added menu from category model
            const resultMenu = result.data.list[result.data.list.length - 1]

            const menu = new Menu (
                resultMenu.name,
                resultMenu.price,
                resultMenu.about,
                resultMenu.category,
                resultMenu._id
            )
            this.menus.push(menu);
            return menu;
        })
    }

    getMenu


}


