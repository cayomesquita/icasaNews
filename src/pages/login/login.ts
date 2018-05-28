import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams, LoadingController, Loading, AlertController, Alert } from 'ionic-angular';

import { AuthService } from './../../providers/firebase/auth.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authService: AuthService) {

    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(): void {
    let formUser = this.loginForm.value;
    let loading: Loading = this.showloading();

    this.authService.login(formUser)
      .then(() => {
        console.log(`Sucesso na autênticação`);
        this.navCtrl.pop();
        loading.dismiss();
        this.showAlertInfo('Sucesso',`Seja bem vindo!`);
      })
      .catch(() => {
        console.log(`Falha na autênticação`);
        loading.dismiss();
        this.showAlertInfo('Falha','Falha na autênticação!');
      });
  }

  onSignup(): void {
    this.navCtrl.push(SignupPage);
  }

  private showloading(): Loading {
    let loading: Loading = this.loadingCtrl.create({ content: 'Autenticando...' });
    loading.present();
    return loading;
  }

  private showAlertInfo(titleInput: string, msgInput: string): void {
    let alert: Alert = this.alertCtrl.create({
      title: titleInput,
      subTitle: msgInput,
      buttons: ['OK']
    });
    alert.present();
  }
}
