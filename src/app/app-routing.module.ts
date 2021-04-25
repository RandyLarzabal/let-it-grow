import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActualiteComponent} from "./pages/actualite/actualite.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'actualites',
    component:ActualiteComponent
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
