import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';

import { News } from './../../models/news.model';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsService {

  constructor(
    public af: AngularFireDatabase
  ) {
  }

  addNews(news: News): Promise<any> {
    delete news.uid;
    var ref = this.af.database.ref().child('news').push();
    return ref.update(news);
  }

  getNews(): Observable<any> {
    //return this.af.list('/news/').valueChanges();
    return this.af.list('/news/').snapshotChanges()
      .map(changes =>
        (changes.map(c => ({ uid:c.payload.key, ...c.payload.val() }))));
  }

  removeNews(news: News): Promise<any> {
    return this.af.object(`/news/${news.uid}`).remove();
  }

}