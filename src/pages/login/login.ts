import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { BackendProvider } from '../../providers/backend/backend';
import { BasketPage } from '../../pages/basket/basket';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,  public backendProvider: BackendProvider,  public modalCtrl: ModalController) {
  }
  openBasicModal() {
    let myModal = this.modalCtrl.create(BasketPage);
    myModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
