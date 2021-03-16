import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';




import {ReactiveFormsModule} from "@angular/forms";
import {ConnectionService} from "./contact-page/connection.service";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErreurPageComponent } from './erreur-page/erreur-page.component';
import { EquipePageComponent } from './equipe-page/equipe-page.component';
import { DonPageComponent } from './don-page/don-page.component';
import { ActualitePageComponent } from './actualite-page/actualite-page.component';
import { LigappPageComponent } from './ligapp-page/ligapp-page.component';
import { ExpeditionPageComponent } from './expedition-page/expedition-page.component';
import { PostCardComponent } from './actualite-page/post-card/post-card.component';
import { PostPageComponent } from './post-page/post-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ContactPageComponent,
    HomePageComponent,
    ErreurPageComponent,
    EquipePageComponent,
    DonPageComponent,
    ActualitePageComponent,
 expedition-page
    LigappPageComponent,
    ExpeditionPageComponent
    PostCardComponent,
    PostPageComponent

  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule, HttpClientModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
