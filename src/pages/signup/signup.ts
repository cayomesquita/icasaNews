import { UserCredential } from '@firebase/auth-types';
import { User } from './../../models/user.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../../providers/firebase/auth.service';
import { UserService } from './../../providers/firebase/user.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
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

  users: Observable<User[]>;

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

    this.users = this.userService.users.valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onSubmit(): void {
    let loading: Loading = this.showloading();
    let formUser = this.signUpForm.value;

    this.authService.createAuthUser({ email: formUser.email, password: formUser.password })
      .then((userCred:UserCredential) => {

        delete formUser.password;

        formUser.uid = userCred.user.uid;
        this.userService.create(formUser)
          .then(() => {
            console.log('Usuario cadastrado');
            loading.dismiss();
          });
      })
      .catch();

  }

  private showloading(): Loading {
    let loading: Loading = this.loadingCtrl.create({ content: 'Carregando...' });
    loading.present();
    return loading;
  }

  private clickMe(user: User): void {
    console.log('Usuário: ', user);
  }
}
