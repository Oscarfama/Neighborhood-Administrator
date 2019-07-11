import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Observable} from "rxjs";
import {PreferredUser} from "../../models/PreferredUser";
import {Visitor} from "../../models/Visitor";

/*
  Generated class for the VisitorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VisitorProvider {

  constructor(public http: HttpClient,
              public db: AngularFireDatabase,) {
    console.log('Hello FirebaseProvider Provider');
  }
  public getVisitors(
    userid: string
  ): Observable<PreferredUser[]> {
    console.log("getVisitors()");
    return Observable.create(observer => {
      let preferredUsers: PreferredUser[] = [];
      this.db.database
        .ref('visitors/' + userid )
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
  public getVisitor(
    userid: string
  ): Observable<PreferredUser> {
    console.log("getVisitor()");
    return Observable.create(observer => {
      let preferredUser: PreferredUser;
      this.db.database
        .ref('visitors/' + userid )
        .once('value')
        .then(snapshot => {
          snapshot.forEach( value => {
            preferredUser = new PreferredUser(value.toJSON());
          });
          observer.next(preferredUser);
          return;
        });
    });
  }
  public saveVisitor(visitor_id : string, visitor : Visitor){
    console.log("saveVisitor()");
    this.db.object(`/visitors/${visitor_id}/`).set(visitor);
  }

  public updateVisitor(visitor_id : string, visitor : Visitor){
    console.log("updateVisitor()");
    this.db.list(`/visitors/${visitor_id}/`).update(visitor_id,visitor);
  }

  deletePreferredUserFirebase(visitor_id : string) {
    console.log("deletePreferredUserFirebase()");
    this.db.list("/preferred-users/"+visitor_id+"/").remove();
  }

}
