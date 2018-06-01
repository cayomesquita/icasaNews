import { News } from './../../models/news.model';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';
import { ThenableReference } from '@firebase/database-types';

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

  addNews(news: News): ThenableReference{
    delete news.uid;
    return this.af.list('/news/').push(news);
  }


}