import { LoadingController, Loading, AlertController} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Observable } from 'rxjs/Observable';
import { Component, Input } from '@angular/core';

import { AuthService } from './../../providers/firebase/auth.service';
import { NewsService } from '../../providers/firebase/news.provider';

import { BaseComponent } from '../base.component';

import { News } from './../../models/news.model';

/**
 * Generated class for the NewsCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'news-card',
  templateUrl: 'news-card.component.html'
})

export class NewsCardComponent extends BaseComponent {

  @Input() news: News;

  authenticated: Observable<boolean>;
  
  constructor(
    private authService: AuthService,
    private inAppBrowser: InAppBrowser,
    private newsService: NewsService,
    protected loadingCtrl: LoadingController,
    protected alertCtrl: AlertController) {
    super(loadingCtrl, alertCtrl);
    this.authenticated = this.authService.authenticated;
  }

  onNewsClick(url: string) {
    this.inAppBrowser.create(url);
  }

  onCardTrashClick(news: News) {
    var loading: Loading = this.showloading('Removendo...');
    this.newsService.removeNews(news)
      .then(() => {
        loading.dismiss();
        this.showAlertInfo(BaseComponent.ALERT_TITLE_SUCESS, 'Notícia removida');
      })
      .catch(() => {
        loading.dismiss();
        this.showAlertInfo(BaseComponent.ALERT_TITLE_FAIL, 'Falha na remoção da notícia!');
      });
  }
}