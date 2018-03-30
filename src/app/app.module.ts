import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenusComponent } from './menu/menus.component';
import { MenuInputComponent } from './menu/menu-input.component';
import { MenuListComponent } from './menu/menu-list.component';
import { MenuComponent } from './menu/menu.component';

import { SignInComponent } from './auth/signin.component'
import { LogOutComponent } from './auth/logout.component'

import { MenuService } from './menu/menu.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuInputComponent,
    MenusComponent,
    MenuListComponent,
    MenuComponent,
    SignInComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
  ],
  providers: [MenuService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
