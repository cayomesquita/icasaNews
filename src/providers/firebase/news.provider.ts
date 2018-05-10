import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor() {
    console.log('Hello FirebaseProvider Provider');
  }
  
}