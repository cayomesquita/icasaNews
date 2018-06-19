import { App, MenuController, LoadingController, Loading } from 'ionic-angular';
import { Component, Input } from '@angular/core';

import { AuthService } from './../../providers/firebase/auth.service';

import { LoginPage } from './../../pages/login/login';

import { User } from '../../models/user.model';

/**
 * Generated class for the UserMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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

  onLogout(): void {
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

  onLogin(): void {
    this.app.getActiveNav().push(LoginPage);
    this.menuCtrl.close();
  }

}
