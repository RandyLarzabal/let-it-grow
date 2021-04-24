import { Injectable } from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';
import {IExpedition} from './expedition.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpeditionService {

  // URL which returns list of JSON items (API end-point URL)
  private readonly URL = 'http://localhost:8000/api/expeditions';

  private expeditions: IExpedition[] = [];
  constructor(private http: HttpClient) {
    this.loadInitialData();
  }


  public expeditions$: BehaviorSubject<IExpedition[]> = new BehaviorSubject(this.expeditions);


  // tslint:disable-next-line:typedef
  loadInitialData() {
    return this.http.get(this.URL)
      .subscribe(
        (res: {data: IExpedition[]}) => {
          this.expeditions.push(...res.data);
        },
        err => console.log('Error retrieving Todos')
      );

  }

}
