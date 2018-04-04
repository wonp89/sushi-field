import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MenusComponent } from "./menu/menus.component";

const APP_ROUTES: Routes = [
    // { path: "", redirectTo: '/menus', pathMatch: 'full' },
    { path: "menus", component: MenusComponent },
    { path: "", component: HomeComponent },
]

export const routing = RouterModule.forRoot(APP_ROUTES);