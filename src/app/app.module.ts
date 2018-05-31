import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {routing} from './app.routing';
import { GhSearchComponent } from './components/gh-search/gh-search.component';
import { UserComponent } from './components/gh-search/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GhSearchComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, routing, HttpModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
