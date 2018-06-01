import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddNewsPage } from './../add-news/add-news';

import { AuthService } from './../../providers/firebase/auth.service';

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

  autenticated: Observable<boolean>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService
  ) {
    this.autenticated = this.authService.authenticated
  }

  onAddNewsClick() {
    this.navCtrl.push(AddNewsPage);
  }

}
