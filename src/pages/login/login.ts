import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth} from "@angular/fire/auth";
import { AlertController } from 'ionic-angular';
import {ManageUsersPage} from "../manage-users/manage-users";
import {MyApp} from "../../app/app.component";
import { Platform, MenuController, Nav } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public angularFireAuth: AngularFireAuth,public alertCtrl: AlertController,
                public menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(email,password){
    this.angularFireAuth.auth.signInWithEmailAndPassword(email,password).then((user) => {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }).catch( (error) => this.displayErrorAlert(error));
  }
  displayErrorAlert(error) {
    const alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: error.message,
      buttons: ['OK']
    });
    alert.present();
  }
}
