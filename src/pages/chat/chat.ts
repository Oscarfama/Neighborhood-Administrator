import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChatRoomPage} from "../chat-room/chat-room";

//@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username:string = '';



  constructor(public navCtrl: NavController,public alert: AlertController) {

  }

  logUser(){
    if (/^[a-zA-Z0-9]+$/.test(this.username))
    {
      this.navCtrl.push(ChatRoomPage, {
        username:this.username
      });
    }else {
      this.alertShow('Error', 'Invalid Username');

    }
  }
  ionViewDidLoad() {

    console.log('ionViewDidLoad ChatPage');
  }
   alertShow(title:string,message:string){
    const alert = this.alert.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });

    alert.present();
  }

}
