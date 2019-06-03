import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {Announcement} from "../../models/annoucencement";

/*
  Generated class for the AnnouncementProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnnouncementProvider {

  constructor(public db: AngularFireDatabase) {
  }

  getAnnouncement(): AngularFireList<Announcement[]> {
    return this.db.list('announcement/');
  }

}
