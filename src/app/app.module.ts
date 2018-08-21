import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { NewsPage } from './../pages/news/news';
import { AddNewsPage } from './../pages/add-news/add-news';
import { StaffPage } from './../pages/staff/staff';
import { TeamPage } from './../pages/team/team';

import { MyApp } from './app.component';

import { UserInfoComponent } from '../components/user-info/user-info.component';
import { UserMenuComponent } from '../components/user-menu/user-menu.component';
import { NewsCardComponent } from '../components/news-card/news-card.component';
import { AvatarUpdaterComponent } from './../components/avatar-updater/avatar-updater';

import { PipesModule } from './../pipes/pipes.module';

import { UserService } from '../providers/firebase/user.service';
import { AuthService } from '../providers/firebase/auth.service';
import { NewsService } from '../providers/firebase/news.provider';
import { SessionProvider } from '../providers/session/session';

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
    ProfilePage,
    UserInfoComponent,
    UserMenuComponent,
    NewsCardComponent,
    AvatarUpdaterComponent
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
    AddNewsPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserService,
    AuthService,
    NewsService,
    SessionProvider,
    InAppBrowser,
    Camera,
    File
  ]
})
export class AppModule {

}
