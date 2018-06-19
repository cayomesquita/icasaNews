import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { NewsPage } from './../pages/news/news';
import { AddNewsPage } from './../pages/add-news/add-news';
import { StaffPage } from './../pages/staff/staff';
import { TeamPage } from './../pages/team/team';

import { UserInfoComponent } from '../components/user-info/user-info.component';
import { UserMenuComponent } from '../components/user-menu/user-menu.component';
import { NewsCardComponent } from '../components/news-card/news-card.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PipesModule } from './../pipes/pipes.module';

import { MyApp } from './app.component';

import { UserService } from '../providers/firebase/user.service';
import { AuthService } from '../providers/firebase/auth.service';
import { NewsService } from '../providers/firebase/news.provider';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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
    AddNewsPage,
    UserInfoComponent,
    UserMenuComponent,
    NewsCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    TeamPage,
    StaffPage,
    TabsPage,
    LoginPage,
    SignupPage,
    AddNewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserService,
    AuthService,
    NewsService,
    InAppBrowser
  ]
})
export class AppModule {

}
