import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PreferredUser} from "../../models/PreferredUser";
import {NavController, NavParams} from "ionic-angular";
import {PreferredUserProvider} from "../../providers/preferred-user/preferred-user";
import {AddPreferredUserPage} from "../../pages/add-preferred-user/add-preferred-user";

/**
 * Generated class for the PreferredUserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'preferred-user',
  templateUrl: 'preferred-user.html'
})
export class PreferredUserComponent {


  @Input() prUser : PreferredUser;
  @Output() delete : EventEmitter<any> = new EventEmitter<any>();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public preferredUserProvider: PreferredUserProvider) {
    console.log('Hello PreferredUserComponent Component');

  }

  goToEditPerson() {
    console.log("goToEditPerson()");
    this.navCtrl.push(AddPreferredUserPage,{prUser: this.prUser,add: false});
  }

  deletePreferredUser() {
    console.log("deletePreferredUser()");
    this.preferredUserProvider.deletePreferredUserFirebase("mainuserid",this.prUser.id);
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    //this.delete.emit();
  }
}
