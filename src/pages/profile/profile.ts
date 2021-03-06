import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SessionProvider } from './../../providers/session/session';

import { User } from './../../models/user.model';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private profileForm: FormGroup;
  profile: User;

  constructor(
    public formBuilder: FormBuilder,
    public session: SessionProvider
  ) {
    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.profileForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
    this.session.currentUser.subscribe(user => {
      this.profile = user;
    });
  }

  onSubmit() {
    let profileAux : User = this.profileForm.value;
    console.log(`Submitted ${profileAux}`);
  }

}
