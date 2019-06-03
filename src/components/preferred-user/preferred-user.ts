import {Component, Input} from '@angular/core';
import {PreferredUser} from "../../models/PreferredUser";

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


  constructor() {
    console.log('Hello PreferredUserComponent Component');

  }

}
