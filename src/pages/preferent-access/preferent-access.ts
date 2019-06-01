import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PreferredUser} from "../../models/PreferredUser";

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

  PreferredUser : PreferredUser[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferentAccessPage');
  }

}
