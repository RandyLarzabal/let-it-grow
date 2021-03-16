import { Injectable } from '@angular/core';

import {BehaviorSubject} from "rxjs";
import {IExpedition} from "./expedition.interface";

@Injectable({
  providedIn: 'root'
})
export class ExpeditionService {

  constructor() {
  }

  private expeditions: IExpedition[] = []

  public expeditions$: BehaviorSubject<IExpedition[]> = new BehaviorSubject(this.expeditions);


  getALlExpeditions(): IExpedition[] {

  }

  deleteExpeditionById(id: number): void {

  }
}
