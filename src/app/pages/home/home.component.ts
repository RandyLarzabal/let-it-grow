import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {IActualite} from "../actualite/actualite.interface";
import {ActualiteService} from "../actualite/actualite.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private subscription: Subscription;
  actualite: IActualite;
  constructor(private actualiteService: ActualiteService) {
  }

  ngOnInit(): void {
    this.subscription = this.actualiteService.actualites$.subscribe(() => {
      this.actualite = this.actualiteService.getLast();
      console.log(this.actualite);
    });
  }

}
