import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AccountStatusPage} from "../pages/account-status/account-status";
import {ChatPage} from "../pages/chat/chat";
import {LogPage} from "../pages/log/log";
import {PreferentAccessPage} from "../pages/preferent-access/preferent-access";
import {ScanPage} from "../pages/scan/scan";
import {ManageUsersPage} from "../pages/manage-users/manage-users";
import {AngularFireModule} from "@angular/fire";

import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireStorageModule } from "@angular/fire/storage";
import {LoginPage} from "../pages/login/login";
import {ChatRoomPage} from "../pages/chat-room/chat-room";
import { AnnouncementProvider } from '../providers/announcement/announcement';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { UserProvider } from '../providers/user/user';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {PreferredUser} from "../models/PreferredUser";
import {PreferredUserComponent} from "../components/preferred-user/preferred-user";
import {AddPreferredUserPage} from "../pages/add-preferred-user/add-preferred-user";
import { PreferredUserProvider } from '../providers/preferred-user/preferred-user';



const fbConfig = {
  apiKey: "AIzaSyANtuSccI6MqcYjAjhFBI0ANhyj60DS-Do",
  authDomain: "neighborhood-administrator.firebaseapp.com",
  databaseURL: "https://neighborhood-administrator.firebaseio.com",
  projectId: "neighborhood-administrator",
  storageBucket: "neighborhood-administrator.appspot.com",
  messagingSenderId: "628322521618",
  appId: "1:628322521618:web:27cbdbb926a11f5b"
};

@NgModule({
  declarations: [
    MyApp,
    ChatRoomPage,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AccountStatusPage,
    ChatPage,
    HelloIonicPage,
    LogPage,
    PreferentAccessPage,
    ScanPage,
    ManageUsersPage,
    LoginPage,
    PreferredUserComponent,
    AddPreferredUserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fbConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ChatRoomPage,
    ItemDetailsPage,
    ListPage,
    AccountStatusPage,
    ChatPage,
    HelloIonicPage,
    LogPage,
    PreferentAccessPage,
    ScanPage,
    ManageUsersPage,
    LoginPage,
    AddPreferredUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AnnouncementProvider,
    FirebaseProvider,
    UserProvider,
    PreferredUserProvider

  ]
})
export class AppModule {}
