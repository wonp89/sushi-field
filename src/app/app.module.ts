import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { environment } from '../environments/environment';

import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

//comopnents and a component module
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { SignInComponent } from './auth/signin.component'
import { LogOutComponent } from './auth/logout.component'
import { MenuModule } from './menu/menu.module';
import { AgmCoreModule } from '@agm/core';

//service
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    HomeComponent,
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
    MenuModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.REACT_APP_GOOGLE_API
    })
  ],
  providers: [
    AuthService, 
    {provide: LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
