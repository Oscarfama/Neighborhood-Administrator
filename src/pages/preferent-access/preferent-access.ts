import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PreferredUser} from "../../models/PreferredUser";
import {AddPreferredUserPage} from "../add-preferred-user/add-preferred-user";
import {PreferredUserProvider} from "../../providers/preferred-user/preferred-user";

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

  PreferredUsers : PreferredUser[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public preferredUserProvider : PreferredUserProvider

              ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferentAccessPage');

  }
  ionViewWillEnter(){
    this.chargeUsers();
  }
  chargeUsers(){
    this.preferredUserProvider.getPreferredUsers("mainuserid").
    subscribe((preferredUsers : PreferredUser[])=> {
      this.PreferredUsers = preferredUsers;
      console.log(this.PreferredUsers);
    });
  }

  addPreferredUser() {
    this.navCtrl.push(AddPreferredUserPage,{prUser: new PreferredUser(),add: true});
  }
}
