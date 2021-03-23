import { Injectable } from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';
import {IExpedition} from './expedition.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpeditionService {

  // URL which returns list of JSON items (API end-point URL)
  private readonly URL = 'http://localhost:8000/api/articles';

  private expeditions: IExpedition[] = [];
  constructor(private http: HttpClient) {
  }


  public expeditions$: BehaviorSubject<IExpedition[]> = new BehaviorSubject(this.expeditions);

  resolveItems(): Observable<any> {
    console.log('Request is sent!');
    // this.http is a HttpClient library provide by @angular/common
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API
    return this.http.get(this.URL);
  }
  // getALlExpeditions(): IExpedition[] {

  // }

  deleteExpeditionById(id: number): void {

  }
}
