import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PreferredUser} from "../../models/PreferredUser";
import {NavController, NavParams} from "ionic-angular";
import {PreferredUserProvider} from "../../providers/preferred-user/preferred-user";
import {AddPreferredUserPage} from "../../pages/add-preferred-user/add-preferred-user";
import {Entrance} from "../../models/entrance";
import {LogDetailsPage} from "../../pages/log-details/log-details";

/**
 * Generated class for the LogRecordComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'log-record',
  templateUrl: 'log-record.html'
})
export class LogRecordComponent {


  @Input() entrance : Entrance;

  @Output() delete : EventEmitter<any> = new EventEmitter<any>();
  timeEnter: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams
             ) {
    console.log('Hello LogRecord Component');
    console.log(this.entrance);
    this.timestampToString();
  }
  timestampToString(){
    // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      var date = new Date(+this.entrance.timestamp*1000);
  // Hours part from the timestamp
      var hours = date.getHours();
  // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
      this.timeEnter = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  }
  goToDetailsEntrance() {
    this.navCtrl.push(LogDetailsPage,{entrance: this.entrance});
  }
}
