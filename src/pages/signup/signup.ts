import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../../providers/firebase/auth.service';
import { UserService } from './../../providers/firebase/user.service';

import { UserCredential } from '@firebase/auth-types';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signUpForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public userService: UserService,
    public authService: AuthService
  ) {

    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signUpForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });

  }

  onSubmit(): void {
    let loading: Loading = this.showloading();
    let formUser = this.signUpForm.value;

    this.authService.createAuthUser({ email: formUser.email, password: formUser.password })
      .then((userCred: UserCredential) => {

        delete formUser.password;

        formUser.uid = userCred.user.uid;
        this.userService.create(formUser.uid, formUser)
          .then(() => {
            console.log('Usuario cadastrado');
            loading.dismiss();
          })
          .catch(() => {
            loading.dismiss();
          });
      })
      .catch(() => {
        loading.dismiss();
      });

  }

  private showloading(): Loading {
    let loading: Loading = this.loadingCtrl.create({ content: 'Carregando...' });
    loading.present();
    return loading;
  }
}
