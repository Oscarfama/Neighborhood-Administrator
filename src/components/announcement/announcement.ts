import { Component } from '@angular/core';

/**
 * Generated class for the AnnouncementComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'announcement',
  templateUrl: 'announcement.html'
})
export class AnnouncementComponent {

  text: string;

  constructor() {
    console.log('Hello AnnouncementComponent Component');
    this.text = 'Hello World';
  }

}
