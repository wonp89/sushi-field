//will set this up after setting up routing
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MenuService } from './menu.service';
import { MenuInputComponent } from './menu-input.component';
import { MenusComponent } from './menus.component';
import { MenuListComponent } from './menu-list.component';
import { MenuComponent } from './menu.component';

@NgModule({
    declarations: [
        MenuInputComponent,
        MenusComponent,
        MenuListComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [MenuService]
})
export class MenuModule {

}