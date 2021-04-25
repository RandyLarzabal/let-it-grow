import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActualiteComponent} from "./pages/actualite/actualite.component";

const routes: Routes = [
  {
    path: '',
    component: ActualiteComponent
  }, {
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
