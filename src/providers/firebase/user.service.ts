import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';

import { User } from '../../models/user.model';

@Injectable()
export class UserService {

  constructor(
    public af: AngularFireDatabase
  ) {
  }

  create(user: User): Promise<any> {
    return this.af.object(`/users/${user.uid}`).set(user);
  }

  getUser(uid: string): Observable<any> {
    return this.af.object(`/users/${uid}`).valueChanges();
  }

}
