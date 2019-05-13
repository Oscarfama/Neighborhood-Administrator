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
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
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
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
