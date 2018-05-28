import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';
import { User, UserCredential } from '@firebase/auth-types';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthService {

  user: Observable<User>;

  constructor(
    public auth: AngularFireAuth
  ) {
    this.user = this.auth.authState;
  }

  createAuthUser(user: { email: string, password: string }): Promise<UserCredential> {
    return this.auth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password);
  }

  login(user: { email: string, password: string }): Promise<UserCredential> {
    return this.auth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password);
  }

  logout(): Promise<any> {
    return this.auth.auth.signOut();
  }

  get authenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.auth.authState.subscribe((user: User) => {
        (user) ? resolve(true) : reject(false);
      });
    })
  }

}
