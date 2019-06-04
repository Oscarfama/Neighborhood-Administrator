import { MenuController } from 'ionic-angular';
import {AuthService} from "../../Services/Auth/auth.service";
import {ChatPage} from "../chat/chat";
import {HelloIonicPage} from "../hello-ionic/hello-ionic";
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
  email: string;
  password: string;
  error = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userSrv: UserProvider,
    public alertCtr: AlertController,
    private loading: LoadingController,
    private events: Events,
    public auth: AuthService
  ) {}


  ionViewDidLoad() {}

  login(email, password) {
    this.auth.signInWithEmail(email, password).then( (page) => {
      if(page == true){
        this.navCtrl.setRoot(HelloIonicPage);
      }else {
        this.navCtrl.setRoot(HelloIonicPage);
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
