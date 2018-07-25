import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { UserService } from './../firebase/user.service';
import { AuthService } from './../firebase/auth.service';

import { User } from './../../models/user.model';

@Injectable()
export class SessionProvider {

  private _currentUser : Observable<User>;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
    this._currentUser = this.userAuthenticated;
  }

  private get userAuthenticated(): Observable<User> {
    return new Observable<User>(observer => {
      this.authService.auth.authState.subscribe((userAuth) => {
        if(userAuth) {
          this.userService.getUser(userAuth.uid).subscribe((obj:any)=>{
            observer.next(new User(obj.name,obj.email,obj.photo));
          })
        }else{
          observer.next(null);
        }
      });
    });
  }

  get currentUser():Observable<User>{
    return this._currentUser;
  }

}
