import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { User as UserAuth} from '@firebase/auth-types';

import { AuthService } from './../providers/firebase/auth.service';
import { UserService } from './../providers/firebase/user.service';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { User } from './../models/user.model';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav;
  rootPage: any = TabsPage;
  pages: { title: string, component: any }[];
  menuCtrl: MenuController;
  currentUser:User;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    menuCtrl: MenuController,
    authService: AuthService,
    userService: UserService
  ) {

    authService.auth.authState.subscribe((userAuth:UserAuth)=>{
      if(userAuth) {
        
      }
    })

    this.menuCtrl = menuCtrl;

    this.pages = [
      { title: 'Home', component: TabsPage },
      { title: 'Login', component: LoginPage }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: any): void {
    this.rootPage = page.component;
    this.menuCtrl.close();
  }
}
