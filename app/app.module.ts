import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {AccountsComponent} from "./accounts.component";
import {LeadsComponent} from "./leads.component";

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, AccountsComponent, LeadsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
