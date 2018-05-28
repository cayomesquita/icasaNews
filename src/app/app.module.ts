import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StaffPage } from './../pages/staff/staff';
import { TeamPage } from './../pages/team/team';
import { NewsPage } from './../pages/news/news';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { UserInfoComponent } from '../components/user-info/user-info.component';
import { UserMenuComponent } from '../components/user-menu/user-menu.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { UserService } from '../providers/firebase/user.service';
import { AuthService } from '../providers/firebase/auth.service';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyCyS3HDFMUmIT8p5o0zUji9jruffH-mbyQ",
  authDomain: "icasanews.firebaseapp.com",
  databaseURL: "https://icasanews.firebaseio.com",
  projectId: "icasanews",
  storageBucket: "icasanews.appspot.com",
  messagingSenderId: "1084983714345"
}

@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    TeamPage,
    StaffPage,
    TabsPage,
    LoginPage,
    SignupPage,
    UserInfoComponent,
    UserMenuComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    TeamPage,
    StaffPage,
    TabsPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserService,
    AuthService
  ]
})
export class AppModule {

}
