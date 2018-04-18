import { NgModule } from "@angular/core";
//CommonModule: The module that includes all the basic Angular directives like NgIf, NgForOf..
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

//components
import { MenusComponent } from './menus.component';
import { MenuInputComponent } from './menu-input.component';
import { MenuListComponent } from './menu-list.component';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';

@NgModule({
    declarations: [
        MenusComponent,
        MenuInputComponent,
        MenuListComponent,
        MenuComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [MenuService]
})

export class MenuModule {

}