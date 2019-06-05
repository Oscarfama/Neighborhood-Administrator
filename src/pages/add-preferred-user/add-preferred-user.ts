import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {PreferredUser} from "../../models/PreferredUser";
import {PreferredUserProvider} from "../../providers/preferred-user/preferred-user";
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddPreferredUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-preferred-user',
  templateUrl: 'add-preferred-user.html',
})
export class AddPreferredUserPage {
  randomstring = require("randomstring");
  public prUser : PreferredUser = new PreferredUser();
  public add : boolean;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public preferredUserProvider: PreferredUserProvider) {
    this.prUser = this.navParams.get('prUser');
    this.add = this.navParams.get('add');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPreferredUserPage');
  }

  saveOnFirebase() {
    this.prUser.id = this.randomstring.generate();
    this.preferredUserProvider.savePreferredUser("mainuserid",this.prUser);
    this.navCtrl.pop();
  }

  updateOnFirebase() {
    this.preferredUserProvider.updatePreferredUser("mainuserid",this.prUser);
    this.navCtrl.pop();
  }
}
