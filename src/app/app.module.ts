import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';



import { Sm01LoginPageComponent } from './sm01-login-page/sm01-login-page.component';
import { Sm02HomePageComponent } from './sm02-home-page/sm02-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    Sm01LoginPageComponent,
    Sm02HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
