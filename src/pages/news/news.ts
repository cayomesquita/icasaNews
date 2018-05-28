import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthService } from './../../providers/firebase/auth.service';
import { AddNewsPage } from './../add-news/add-news';

import { User } from '@firebase/auth-types';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  currentUser: User;
  autenticated: Promise<boolean>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService
  ) {
    this.authService.user.subscribe((user: User) => {
      this.currentUser = user;
    });
    this.autenticated = this.authService.authenticated;
  }

  onAddNewsClick() {
    this.navCtrl.push(AddNewsPage);
  }

}
