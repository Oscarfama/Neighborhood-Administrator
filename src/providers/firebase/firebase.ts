import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {PreferredUser} from "../../models/PreferredUser";
import {Observable} from "rxjs";

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public http: HttpClient,
              public db: AngularFireDatabase,) {
    console.log('Hello FirebaseProvider Provider');
  }
  public getPreferredUsers(
    userid: string
  ): Observable<PreferredUser[]> {
    console.log("getPreferredUsers()");
    return Observable.create(observer => {
      let preferredUsers: PreferredUser[] = [];
      this.db.database
        .ref('preferred-users/' + userid )
        .once('value')
        .then(snapshot => {
          snapshot.forEach( value => {
            preferredUsers.push(new PreferredUser(value.toJSON()));
          });
          observer.next(preferredUsers);
          return;
        });
    });
  }

}
