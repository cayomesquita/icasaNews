import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../../models/user.model';


/*Generated class for the UserProvider provider.  See https://angular.io/guide/dependency-injection for more info on providers

  and Angular DI.
*/
@Injectable()
export class UserService {

  users: AngularFireList<User>;

  constructor(
    public af: AngularFireDatabase
  ) {
    this.users = this.af.list('/users');
  }

  create(user: User): Promise<any> {
    return this.af.object(`/users/${user.uid}`).set(user);
  }

}
