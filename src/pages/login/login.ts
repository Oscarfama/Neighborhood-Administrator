import { Component, ViewChild } from '@angular/core';
import {
  AlertController,
  Events,
  LoadingController,
  NavController,
  NavParams
} from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    public userSrv: UserProvider,
    public alertCtr: AlertController,
    private loading: LoadingController,
    private events: Events,
  ) {}

  ionViewDidLoad() {}


}
