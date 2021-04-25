import {Component, OnInit} from '@angular/core';

import {ExpeditionService} from './expedition.service';
import {Subscription} from "rxjs";
import {IExpedition} from "./expedition.interface";

@Component({
  selector: 'app-expedition',
  templateUrl: './expedition.component.html',
  styleUrls: ['./expedition.component.scss']
})
export class ExpeditionComponent implements OnInit {

  private subscription: Subscription;
  expeditions: IExpedition[];

  constructor(private expeditionService: ExpeditionService
  ) {
  }

  ngOnInit(): void {

    this.subscription = this.expeditionService.expeditions$.subscribe(() => {
      this.expeditions = this.expeditionService.expeditions$.getValue();
      console.log(this.expeditions);
    });

  }

}
