import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Entrance} from "../../models/entrance";
import {PreferredUser} from "../../models/PreferredUser";
import {EntranceProvider} from "../../providers/entrance/entrance";

/**
 * Generated class for the LogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {
  Entrances: Entrance[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public entranceProvider: EntranceProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogPage');

  }
  ionViewWillEnter() {
    console.log('ionViewDidLoad LogPage');
    this.entranceProvider.getEntrances("mainuserid").
    subscribe((entrances : Entrance[])=> {
      this.Entrances = entrances;
      console.log(this.Entrances);
      console.log(this.Entrances.length);
    });
  }

}
