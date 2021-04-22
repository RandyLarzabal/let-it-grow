import {Component, Input, OnInit} from '@angular/core';
import {IActualite} from "../../pages/actualite/actualite.interface";

@Component({
  selector: 'app-actualite-card',
  templateUrl: './actualite-card.component.html',
  styleUrls: ['./actualite-card.component.scss']
})
export class ActualiteCardComponent implements OnInit {
  title: string;
  description: string;
  img: string;
  @Input() actualite:IActualite;
  @Input() pair;
  constructor() {

  }



  ngOnInit(): void {
    this.title = this.actualite.title;
    this.description = this.actualite.description;
    this.img = this.actualite.img;
  }

}
