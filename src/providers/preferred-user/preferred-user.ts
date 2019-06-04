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
  export class PreferredUserProvider {

  constructor(public http: HttpClient,
              public db: AngularFireDatabase) {
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
  public getPreferredUser(
    userid: string, prUserId: string
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
          let preferredUser : PreferredUser[];
          preferredUsers.forEach(user=>{
            if(user.id == prUserId){
              preferredUser.push(user);
            }
          });
          observer.next(preferredUsers);
          return;
        });
    });
  }

  public savePreferredUser(user_id : string, prUser : PreferredUser){
    console.log("savePreferredUser()");
    this.db.object(`/preferred-users/${user_id}/${prUser.id}`).set(prUser);
    this.db.object(`/preferred-users-list/${prUser.id}`).set(prUser);
  }

  public updatePreferredUser(user_id : string, prUser : PreferredUser){
    console.log("updatePreferredUser()");
    this.db.list("/preferred-users/"+user_id+"/").update(prUser.id,prUser);
    this.db.list("/preferred-users-list/").update(prUser.id,prUser);
  }

  deletePreferredUserFirebase(user_id : string, pr_user_id : string) {
    console.log("deletePreferredUserFirebase()");
    this.db.list("/preferred-users/"+user_id+"/"+pr_user_id).remove();
    this.db.list("/preferred-users-list/"+pr_user_id).remove();
  }
}
