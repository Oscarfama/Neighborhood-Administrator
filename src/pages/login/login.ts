import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import {AuthService} from "../../Services/Auth/auth.service";
import {ManageUsersPage} from "../manage-users/manage-users";
import {ChatPage} from "../chat/chat";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public menu: MenuController,public auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(email, password) {

    await this.auth.signInWithEmail(email, password).then( (page) => {
      if(page == true){
        this.navCtrl.push(ManageUsersPage);
      }else {
        this.navCtrl.push(ChatPage);
      }
    });

  }
}
