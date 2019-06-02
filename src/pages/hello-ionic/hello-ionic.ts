import { Component } from '@angular/core';
import {ChatPage} from "../chat/chat";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {
  }

  goToChat(){
    this.navCtrl.push(ChatPage);
  }

}
