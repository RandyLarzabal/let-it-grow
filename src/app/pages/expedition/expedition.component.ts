import {Component, OnInit} from '@angular/core';

import {ExpeditionService} from './expedition.service';

@Component({
  selector: 'app-expedition',
  templateUrl: './expedition.component.html',
  styleUrls: ['./expedition.component.scss']
})
export class ExpeditionComponent implements OnInit {


  images: any[] = [{
    src: '../assets/img/expedition/vietnam.png'
  }, {src: '../assets/img/expedition/inde.png'}, {src: '../assets/img/expedition/amazonie.png'},]


  constructor(private ExpeditionService: ExpeditionService
  ) {
  }

  ngOnInit()
    :
    void {
  }

  handleImageClick(src) {
    console.log(src);
  }

}
