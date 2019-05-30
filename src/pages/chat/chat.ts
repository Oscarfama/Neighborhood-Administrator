import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from "@angular/fire/database";
import {AngularFireStorage} from "@angular/fire/storage";
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/auth";

//@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  text: string;
  chatRef:any;
  uid:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fs: AngularFirestore,
              public af: AngularFireAuth) {
    this.uid=localStorage.getItem('userid');
    this.chatRef = this.fs.collection('chats').valueChanges();
  }
  sendMessage(){
    if(this.text != ''){
      this.fs.collection('chats').add({
        Name:this.af.auth.currentUser.displayName,
        Message:this.text,
        UserID: this.af.auth.currentUser.uid,
      });this.text='';
    }
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ChatPage');
  }

}
