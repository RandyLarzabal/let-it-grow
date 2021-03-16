import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ActualitePageComponent} from "./actualite-page/actualite-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {EquipePageComponent} from "./equipe-page/equipe-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'equipe', component: EquipePageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'actualite', component: ActualitePageComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
