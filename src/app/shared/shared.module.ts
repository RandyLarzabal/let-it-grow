import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ActualiteCardComponent } from './actualite-card/actualite-card.component';
import { TitleComponent } from './title/title.component';
import { AdminFormComponent } from './admin-form/admin-form.component';



@NgModule({
  declarations: [ButtonComponent, ActualiteCardComponent, TitleComponent, AdminFormComponent],
  imports: [
    CommonModule
  ],
    exports: [
        ButtonComponent,
        ActualiteCardComponent,
        TitleComponent
    ]
})
export class SharedModule { }
