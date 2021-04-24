import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ActualiteCardComponent } from './actualite-card/actualite-card.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [ButtonComponent, ActualiteCardComponent, TitleComponent],
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
