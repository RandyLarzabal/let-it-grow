import { Component, OnInit } from '@angular/core';

import {ExpeditionService} from './expedition.service';

@Component({
  selector: 'app-expedition',
  templateUrl: './expedition.component.html',
  styleUrls: ['./expedition.component.scss']
})
export class ExpeditionComponent implements OnInit {

  constructor(private ExpeditionService: ExpeditionService) { }

  ngOnInit(): void {
  }

}
