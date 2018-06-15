import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';

import { NewsService } from './../../providers/firebase/news.provider';

import { BaseComponent } from '../../components/base.component';

/**
 * Generated class for the AddNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-news',
  templateUrl: 'add-news.html',
})

export class AddNewsPage extends BaseComponent {

  addNewsForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public newsService: NewsService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    super(loadingCtrl, alertCtrl)
    let urlRE = /^http(s)?:\/\/[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/ig;
    this.addNewsForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      abstract: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(150)]],
      url: ['', [Validators.required, Validators.pattern(urlRE)]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewsPage');
  }

  onSubmit() {
    var loading: Loading = this.loadingCtrl.create({ content: 'Adicionando notícia...' });
    var value: any = this.addNewsForm.value;
    value.date = new Date();
    this.newsService.addNews(value)
      .then(() => {
        loading.dismiss();
        this.navCtrl.pop();
      })
      .catch(err => {
        loading.dismiss();
        this.alertCtrl.create({
          title: 'Alerta',
          message: 'Erro ao adicionar nova notícia!',
          buttons: ['OK']
        }).present();

      });
  }

}