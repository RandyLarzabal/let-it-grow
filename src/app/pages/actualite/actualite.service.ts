import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {IActualite} from "./actualite.interface";


@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  // URL which returns list of JSON items (API end-point URL)
  private readonly URL = 'http://localhost:8000/api/articles';

  private actualites: IActualite[] = [];

  public actualites$: BehaviorSubject<IActualite[]> = new BehaviorSubject(this.actualites);


  // tslint:disable-next-line:typedef
  loadInitialData() {
    return this.http.get(this.URL)
      .subscribe(
        (res: {data: IActualite[]}) => {
          this.actualites.push(...res.data);
        },
        err => console.log('Error retrieving Todos')
      );

  }


}
