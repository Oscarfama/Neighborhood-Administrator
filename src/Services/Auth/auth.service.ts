import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import {BehaviorSubject, Observable, of} from 'rxjs';
import {first, map } from 'rxjs/operators';
import {User} from "../../models/Roles";
import {AngularFireDatabase} from "@angular/fire/database";
import {switchMap} from "rxjs-compat/operator/switchMap";
import 'rxjs/add/operator/switchMap';
import "rxjs-compat/add/observable/of";
import {user} from "firebase-functions/lib/providers/auth";

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<any>;
  user: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.afAuth.authState.switchMap(auth => {
      if(auth) {
        return this.db.object('users/' + auth.uid)
      }else{
        return Observable.of(null);
      }
    }).subscribe(user => {
      this.user.next(user)
    })
  }

  getUser() {
    return this.user$.pipe(first()).toPromise();
  }

  googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider).then(credential => {
      this.updateUser(credential.user)
    });
  }
  private updateUser(authData){
    const userData = new User(authData);
    const ref = this.db.object('users/' + authData.uid);
    ref.take(1).subscribe(user => {
      if(!user.role){
        ref.update(userData)
      }
    })

  }



  private updateUserData({ uid, email, displayName, photoURL }) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL
    };

    return userRef.set(data, { merge: true });
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }
}
