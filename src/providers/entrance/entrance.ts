import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Observable} from "rxjs";
import {PreferredUser} from "../../models/PreferredUser";
import {Entrance} from "../../models/entrance";

/*
  Generated class for the EntranceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EntranceProvider {

  constructor(public http: HttpClient,
              public db: AngularFireDatabase) {
    console.log('Hello EntranceProvider Provider');
  }

  public getEntrances(
    userid: string
  ): Observable<Entrance[]> {
    console.log("getEntrances()");
    return Observable.create(observer => {
      let entrances: Entrance[] = [];
      this.db.database
        .ref('log/' + userid )
        .once('value')
        .then(snapshot => {
          snapshot.forEach( value => {
            entrances.push(new Entrance(value.toJSON()));
          });
          observer.next(entrances);
          return;
        });
    });
  }
}
