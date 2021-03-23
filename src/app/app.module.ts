import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExpeditionComponent } from './pages/expedition/expedition.component';
import {SharedModule} from './shared/shared.module';
import {ButtonModule} from './shared/button/button.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ExpeditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
