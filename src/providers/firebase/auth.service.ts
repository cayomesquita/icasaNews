import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { UserCredential } from '@firebase/auth-types';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthService {

  constructor(
    public auth: AngularFireAuth
  ) {
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

  get authenticated(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.auth.authState.subscribe((userAuth) => {
        observer.next((userAuth)?true:false);
      });
    });
  }

  get uidAuth():string{
    this.auth.authState.subscribe((userAuth) => {
      return userAuth.uid;
    });
    return null;
  }

}
