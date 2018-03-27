import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenusComponent } from './menu/menus.component';
import { MenuInputComponent } from './menu/menu-input.component';

import { MenuService } from './menu/menu.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuInputComponent,
    MenusComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
