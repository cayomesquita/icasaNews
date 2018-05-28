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
  currentUser:User;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    authService: AuthService,
    userService: UserService
  ) {

    authService.auth.authState.subscribe((userAuth:UserAuth)=>{
      console.log(userAuth);
      if(userAuth) {
        userService.getUser(userAuth.uid).subscribe((obj:any)=>{
          this.currentUser = new User(obj.name,obj.email,obj.uid,obj.photo);
        })
      }else{
        this.currentUser = null;
      }
    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}
