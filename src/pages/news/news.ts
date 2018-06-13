import { PageBase } from './../page.base';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser";

import { AddNewsPage } from './../add-news/add-news';

import { NewsService } from './../../providers/firebase/news.provider';
import { AuthService } from './../../providers/firebase/auth.service';

import { News } from './../../models/news.model';

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
export class NewsPage extends PageBase {

  news: Observable<News>;

  authenticated: Observable<boolean>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    public newsService: NewsService,
    public inAppBrowser: InAppBrowser,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    super(loadingCtrl, alertCtrl);
    this.authenticated = this.authService.authenticated
    this.news = this.newsService.getNews();
  }

  onAddNewsClick() {
    this.navCtrl.push(AddNewsPage);
  }

  onNewsClick(url: string) {
    this.inAppBrowser.create(url);
  }

  onCardTrashClick(news: News) {
    var loading: Loading = this.showloading('Removendo...');
    this.newsService.removeNews(news)
      .then(() => {
        loading.dismiss();
        this.showAlertInfo(PageBase.ALERT_TITLE_SUCESS,'Notícia removida');

      })
      .catch(() => {
        loading.dismiss();
        this.showAlertInfo(PageBase.ALERT_TITLE_FAIL,'Falha na remoção da notícia!');
      });
  }
}
