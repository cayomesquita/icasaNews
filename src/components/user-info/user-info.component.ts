import { Component, Input } from '@angular/core';

import { User } from './../../models/user.model';

/**
 * Generated class for the UserInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-info',
  templateUrl: 'user-info.component.html'
})
export class UserInfoComponent {

  @Input() user: User;

  constructor() {
  }

}
