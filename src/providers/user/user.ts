import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AlertController } from 'ionic-angular';

@Injectable()
export class UserProvider {
  loggedIn = false;

  constructor(
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController
  ) {}

  getToken(): Promise<string> {
    return this.afAuth.auth.currentUser.getIdToken();
  }

  init() {
    return this.afAuth.authState;
  }

  alert(message: string) {
    this.alertCtrl
      .create({
        title: 'Information',
        subTitle: message,
        buttons: ['OK']
      })
      .present();
  }

  isLoggedIn() {
    return this.afAuth.auth.currentUser;
  }

  signIn(serlogin: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(serlogin, password);
  }

  reauthenticate(email, password): Promise<any> {
    const credentials = auth.EmailAuthProvider.credential(
      email,
      password
    );
    return this.afAuth.auth.currentUser.reauthenticateAndRetrieveDataWithCredential(
      credentials
    );
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }

  register(userlogin: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(userlogin, password);
  }

  forgotPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  sendEmailVerification() {
    this.afAuth.authState.subscribe(user => {
      user.sendEmailVerification().then(() => {});
    });
  }
}
