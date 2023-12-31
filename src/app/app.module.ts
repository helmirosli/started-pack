import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayBoardComponent } from './display-board/display-board.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayBoardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
