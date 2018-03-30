import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Menu } from './menu.model';
import { Category } from './category.model'

@Injectable()
export class MenuService {
    //category is the cetral array that handle client side data
    private category: Category[] = []
    menuIsEdit = new EventEmitter<Menu>()

    constructor(private http: Http) { }

    addMenu(menu: Menu) {
        const body = JSON.stringify(menu);
        const headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post('https://sushifield.herokuapp.com/menu', body, { headers: headers })
            .map((res: Response) => {
                const result = res.json().data[0];
                const category = new Category(
                    result.categories,
                    result.list
                )
                for (let menu of this.category) {
                    //push added menu object into category
                    if (menu.categories === result.categories) menu.list.push(result.list[result.list.length - 1])
                }
                return category;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json());
            })
    }

    getMenu() {
        return this.http.get('https://sushifield.herokuapp.com/menu')
            .map((res: Response) => {
                const result = res.json().data;
                let allMenus: any = [];
                for (let menu of result) {
                    allMenus.push(new Category(
                        menu.categories,
                        menu.list
                    ))
                }
                this.category = allMenus;
                return allMenus;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json());
            })
    }

    editMenu(menu: Menu) {
        this.menuIsEdit.emit(menu)
    }

    deleteFromOriginalCategory (menu: Menu) {
        for (let menus of this.category) {
            if (menus.categories === menu.category) menus.list.splice(menus.list.indexOf(menu), 1)
        }
    }

    updateMenu(menu: Menu) {
        for (let menus of this.category) {
            if (menus.categories === menu.category) {
                menus.list.push(menu)
            }
        }
        const body = JSON.stringify(menu);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch('https://sushifield.herokuapp.com/menu/' + menu._id, body, { headers: headers })
            .map((res: Response) => res.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteMenu(menu: Menu) {
        for (let menus of this.category) {
            if (menus.categories === menu.category) menus.list.splice(menus.list.indexOf(menu), 1)
        }
        return this.http.delete('https://sushifield.herokuapp.com/menu/' + menu._id)
            .map((res: Response) => res.json())
            .catch((error: Response) => Observable.throw(error.json()));

    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}
