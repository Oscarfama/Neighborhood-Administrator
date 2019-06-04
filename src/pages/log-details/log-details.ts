import {Component, Input} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PreferredUser} from "../../models/PreferredUser";
import {Entrance} from "../../models/entrance";
import {Visitor} from "../../models/visitor";
import {PreferredUserProvider} from "../../providers/preferred-user/preferred-user";
import {VisitorProvider} from "../../providers/visitor/visitor";

/**
 * Generated class for the LogDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-log-details',
  templateUrl: 'log-details.html',
})
export class LogDetailsPage {

  @Input() entrance : Entrance;
  visitor : Visitor;
  prUser: PreferredUser;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public preferredUserProvider: PreferredUserProvider,
              public visitorProvider: VisitorProvider) {
    this.getVisitor();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogDetailsPage');

  }

  private getVisitor() {
    //Search for visitor in preferred or visitor according to
    if (this.entrance.ispreferred) {
      this.preferredUserProvider.getPreferredUser(this.entrance.preferredUserId).subscribe(info => {
        this.prUser = info;
      });
    } else {
      this.visitorProvider.getVisitor(this.entrance.preferredUserId).subscribe(info => {
        this.visitor = info;
      });

    }
  }
}
