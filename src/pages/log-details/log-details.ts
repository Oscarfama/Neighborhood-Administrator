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

  entrance : Entrance;
  visitor : Visitor;
  prUser: PreferredUser;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public preferredUserProvider: PreferredUserProvider,
              public visitorProvider: VisitorProvider) {

  }

  ionViewDidLoad() {

  }
 ngOnInit() {
    console.log('ionViewDidLoad LogDetailsPage');
    this.entrance = this.navParams.get('entrance');
    console.log("*+++++++++++++++++***********************");
    console.log(this.entrance);
    this.getVisitor();
    console.log(this.visitor);
    console.log(this.prUser);
  }
  ionViewWillEnter(){

  }

  private getVisitor() {
    //Search for visitor in preferred or visitor according to
    if (this.entrance.ispreferred) {
      this.preferredUserProvider.getPreferredUser("mainuserid",this.entrance.pruserid).subscribe(info => {
        console.log("INFOOOOOOOO");
        console.log(this.entrance.pruserid);
        console.log(info);
        this.prUser = info[0];
      });
    } else {
      this.visitorProvider.getVisitor(this.entrance.visitorid).subscribe(info => {
        this.visitor = info;
      });

    }
  }
}
