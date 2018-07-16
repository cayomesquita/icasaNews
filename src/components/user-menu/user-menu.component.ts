import { App, MenuController, LoadingController, Loading } from 'ionic-angular';
import { Component, Input } from '@angular/core';

import { AuthService } from './../../providers/firebase/auth.service';

import { LoginPage } from './../../pages/login/login';
import { ProfilePage } from './../../pages/profile/profile';

import { User } from '../../models/user.model';

@Component({
  selector: 'user-menu',
  templateUrl: 'user-menu.component.html'
})
export class UserMenuComponent {

  @Input('user') currentUser: User;


  constructor(
    public app: App,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    public authService: AuthService
  ) {
  }

  onClickLogout() {
    let loading: Loading = this.loadingCtrl.create({ content: 'Saindo...' });
    loading.present();
    this.authService.logout()
      .then(() => {          
        loading.dismiss();
      })
      .catch(() => {
        loading.dismiss();
      });
  }

  onClickLogin() {
    this.app.getActiveNav().push(LoginPage);
    this.menuCtrl.close();
  }

  onClickProfile(){
    this.app.getActiveNav().push(ProfilePage);
    this.menuCtrl.close();
  }

}
