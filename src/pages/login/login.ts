import {AuthService} from "../../Services/Auth/auth.service";
import {ChatPage} from "../chat/chat";
import {HomePage} from "../home/home";
import { Component, ViewChild } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email: string;
  password: string;
  error = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthService,
    public alertCtr: AlertController

  ) {}


  ionViewDidLoad() {}

  login(email, password) {
    this.auth.signInWithEmail(email, password).then( (page) => {
      if(page == true){
        this.navCtrl.setRoot(HomePage);
      }else {
        this.navCtrl.setRoot(HomePage);
      }
    }).catch((error) => this.displayErrorAlert(error));
  }
  async loginGoogle(){
  }
  displayErrorAlert(error){
     const alert = this.alertCtr.create({
       title: 'Error!',
       subTitle: error.message,
       buttons: ['OK']
     });
     alert.present();
  }

}
