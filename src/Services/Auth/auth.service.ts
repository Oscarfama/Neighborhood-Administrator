import { Injectable } from '@angular/core';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';
import {AngularFireDatabase} from "@angular/fire/database";
import {AlertController} from "ionic-angular";

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private _firebaseDb: AngularFireDatabase,
    private _firebaseAuth: AngularFireAuth,
    public alertCtrl: AlertController
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  signInWithEmail(email,password){
    var promise =  new Promise ( async(resolve, reject) => {
      try {
        const user = await this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
        const db = await this._firebaseDb.database.ref("/guards");
        db.on("value", async snapshot => {
          const uid = await user.user.uid;
          try {
            if (snapshot.child(uid).val()) {
              resolve(true);
            } else {
              resolve(false);
            }
          } catch (e) {
            this.displayErrorAlert("The user you tried to use, doesn't have enough access")
          }
        });
      } catch (e) {
        this.displayErrorAlert(e.message)
      }
    });
    console.log(promise);
    return promise;
  }
  displayErrorAlert(error) {
    const alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: error,
      buttons: ['OK']
    });
    alert.present();
  }

  getUser() {
    return this.user$.pipe(first()).toPromise();
  }

  googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private async oAuthLogin(provider) {
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
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
    // return this.router.navigate(['/']);
  }
}
