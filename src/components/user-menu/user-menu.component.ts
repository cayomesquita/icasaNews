import { App, MenuController } from 'ionic-angular';
import { Component, Input } from '@angular/core';

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
      public menuCtrl: MenuController
  ) {
    console.log('Hello UserMenuComponent Component');
  }

  onLogout():void{
    console.log(`Logout`);
  }

  onLogin():void{
    this.app.getActiveNav().push('LoginPage');
    this.menuCtrl.close();
  }

}
