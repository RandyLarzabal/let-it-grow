import {Component, OnInit} from '@angular/core';
import {ExpeditionService} from './expedition.service'

@Component({
  selector: 'app-expedition-page',
  templateUrl: './expedition-page.component.html',
  styleUrls: ['./expedition-page.component.scss']
})
export class ExpeditionPageComponent implements OnInit {

  constructor(private ExpeditionService: ExpeditionService) {
  }

  ngOnInit(): void {
  }


}
