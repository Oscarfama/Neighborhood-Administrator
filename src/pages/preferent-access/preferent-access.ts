import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PreferredUser} from "../../models/PreferredUser";
import {FirebaseProvider} from "../../providers/firebase/firebase";

/**
 * Generated class for the PreferentAccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-preferent-access',
  templateUrl: 'preferent-access.html',
})
export class PreferentAccessPage {
//public firebaseProvider : FirebaseProvider
  PreferredUsers : PreferredUser[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public firebaseProvider : FirebaseProvider

              ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferentAccessPage');
    this.firebaseProvider.getPreferredUsers("mainuserid").
      subscribe((preferredUsers : PreferredUser[])=> {
        this.PreferredUsers = preferredUsers;
        console.log(this.PreferredUsers);
    });
  }

  addPreferredUser() {

  }
}
