import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Product } from '../../models/product';
import { BackendProvider } from '../../providers/backend/backend';

/**
 * Generated class for the QuantityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quantity',
  templateUrl: 'quantity.html',
})
export class QuantityPage {
  product: Product[]
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public backendProvider: BackendProvider) {
    this.product = this.navParams.get('product');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuantityPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
}
Ondismiss(product, quantityProduct){
this.backendProvider.addBasketMultiple(product, quantityProduct);

this.viewCtrl.dismiss();
}
}
