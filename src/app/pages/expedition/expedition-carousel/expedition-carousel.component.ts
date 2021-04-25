import {Component, Input, OnInit} from '@angular/core';
import { IExpedition } from '../expedition.interface';

@Component({
  selector: 'app-expedition-carousel',
  templateUrl: './expedition-carousel.component.html',
  styleUrls: ['./expedition-carousel.component.scss']
})
export class ExpeditionCarouselComponent implements OnInit {

  @Input() expedition: IExpedition
  @Input() isEven: boolean

  imageSelected: number = 0

  constructor() { }

  ngOnInit(): void {
  }


  handleImageClick(index) {
    this.imageSelected = index
  }

}
