import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {AnnouncementProvider} from "../../providers/announcement/announcement";
import {Announcement} from "../../models/annoucencement";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards: Announcement[] = [];

  constructor(public navCtrl: NavController, public announc: AnnouncementProvider) {
    this.announc.getAnnouncement().snapshotChanges().subscribe(snap =>{
      snap.forEach(element => {
        let card =element.payload.toJSON() as Announcement;
        this.cards.push(card);
      })
    });
  }

}
