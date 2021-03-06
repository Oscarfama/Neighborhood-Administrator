import {Component, Input, ViewChild} from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PreferentAccessPage} from "../pages/preferent-access/preferent-access";
import {LogPage} from "../pages/log/log";
import {ChatPage} from "../pages/chat/chat";
import {AccountStatusPage} from "../pages/account-status/account-status";
import {ManageUsersPage} from "../pages/manage-users/manage-users";
import {ScanPage} from "../pages/scan/scan";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page

  rootPage = HelloIonicPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Acceso Preferente', component: PreferentAccessPage },
      { title: 'Historial', component: LogPage },
      { title: 'Estado de cuenta', component: AccountStatusPage },
      { title: 'Chat con seguridad', component: ChatPage },
      { title: 'Administrar usuarios', component: ManageUsersPage },
      { title: 'Escanear', component: ScanPage }

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.push(page.component);
    // this.nav.setRoot(page.component);
  }
}
