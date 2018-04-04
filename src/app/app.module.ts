import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component'
import { AppComponent } from './app.component';
import { MenusComponent } from './menu/menus.component';
import { MenuInputComponent } from './menu/menu-input.component';
import { MenuListComponent } from './menu/menu-list.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header.component'
import { FooterComponent } from './footer.component'

import { SignInComponent } from './auth/signin.component'
import { LogOutComponent } from './auth/logout.component'

import { AgmCoreModule } from '@agm/core';

import { MenuService } from './menu/menu.service';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    HomeComponent,
    MenuInputComponent,
    MenusComponent,
    MenuListComponent,
    MenuComponent,
    SignInComponent,
    LogOutComponent,
    FooterComponent,
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAt7lMgvwlqvY8f9NMjsvvMUjvuY5_hS70'
    })
  ],
  providers: [MenuService, AuthService, {provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
