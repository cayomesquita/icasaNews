import { LoadingController, Loading, AlertController, Alert } from 'ionic-angular';

export class BaseComponent {

  static readonly ALERT_TITLE_SUCESS:string="Sucesso";
  static readonly ALERT_TITLE_FAIL:string="Falha";

  constructor(
    protected loadingCtrl: LoadingController,
    protected alertCtrl: AlertController
  ) {
  }

  protected showloading(content: string = null): Loading {
    let loading: Loading = this.loadingCtrl.create({ content: (content) ? content : 'Carregando...' });
    loading.present();
    return loading;
  }

  protected showAlertInfo(titleInput: string, msgInput: string): void {
    let alert: Alert = this.alertCtrl.create({
      title: titleInput,
      subTitle: msgInput,
      buttons: ['OK']
    });
    alert.present();
  }
}
