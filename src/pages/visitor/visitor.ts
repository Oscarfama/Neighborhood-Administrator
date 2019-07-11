import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Visitor} from "../../models/Visitor";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {HomePage} from "../home/home";

/**
 * Generated class for the VisitorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visitor',
  templateUrl: 'visitor.html',
})
export class VisitorPage {

  object: AngularFireList<any>;
  visitor: Visitor;
  public formValidator: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private formBuilder: FormBuilder, private db: AngularFireDatabase) {

    this.visitor = new Visitor();


    this.formValidator = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      houseStreet: ['', Validators.required],
      houseNumber: ['', Validators.required],
      vehicleNumber: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitorPage');
  }

  async addVisitorClick() {
    await this.db.list('/mainuserid/entrance3/').push({id:"entraceid", ispreferred:true,timestamp:"123123",visitorname:"Juan"});
    this.navCtrl.setRoot(HomePage);
  }

}
