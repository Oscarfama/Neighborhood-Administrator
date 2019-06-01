import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from "@angular/fire/database";
import {object} from "firebase-functions/lib/providers/storage";


@IonicPage()
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {

  username: string = '';
  message: string = '';
  subs;
  messages: any ;


  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
   this.username = this.navParams.get('username');
    this.subs = this.db.list('/chat').valueChanges().subscribe(data => {
      this.messages = data;
   });
  }

  sendMessage(){
    this.db.list('/chat').push({
      username: this.username,
      message: this.message
    }).then( () => {

      }
    ).catch(() => {

      });
    this.message= '';
  }
  ionViewDidLoad() {
    this.db.list('/chat').push({
      specialMessage: true,
      message: `${this.username} has joined the room`
    });
  }
  ionViewWillLeave(){
    this.subs.unsubscribe();
    this.db.list('/chat').push({
      specialMessage: true,
      message: `${this.username} has left the room`
    });
  }

}
