import {AuthService} from "../../Services/Auth/auth.service";
import {ChatPage} from "../chat/chat";
import {HomePage} from "../home/home";
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  @ViewChild('username')
  username;
  @ViewChild('password')
  password;
  error = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthService
  ) {}


  ionViewDidLoad() {}

  async login(email, password) {
    await this.auth.signInWithEmail(email, password).then( (page) => {
      if(page == true){
        this.navCtrl.setRoot(HomePage);
      }else {
        this.navCtrl.push(ChatPage);
      }
    });

  }

}
