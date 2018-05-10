import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';
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
  ) { }

  createAuthUser(user: { email: string, password: string }): Promise<UserCredential> {
    return this.auth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password);
  }

}
