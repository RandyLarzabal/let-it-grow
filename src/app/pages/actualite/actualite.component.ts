import {Component, OnInit} from '@angular/core';
import {ActualiteService} from './actualite.service';
import {Subscription} from 'rxjs';
import {IActualite} from "./actualite.interface";

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {

  private subscription: Subscription;
  actualites: IActualite[];
  constructor(private actualiteService: ActualiteService) {
  }




  ngOnInit(): void {
    this.subscription = this.actualiteService.actualites$.subscribe(() => {
      this.actualites = this.actualiteService.actualites$.getValue();
      console.log(this.actualites);
    });
  }

}
