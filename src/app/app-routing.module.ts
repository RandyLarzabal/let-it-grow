import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpeditionComponent} from "./pages/expedition/expedition.component";
import {ActualiteComponent} from "./pages/actualite/actualite.component";
import {TeamComponent} from "./pages/team/team.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'expeditions',
    component:ExpeditionComponent
  },
  {
    path:'actualites',
    component:ActualiteComponent
  },
  {
    path:'equipe',
    component:TeamComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
