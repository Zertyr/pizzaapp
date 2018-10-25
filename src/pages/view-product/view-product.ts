import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { BackendProvider } from '../../providers/backend/backend';
import { Product } from '../../models/product';

/**
/**
 * Generated class for the ViewProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-view-product',
  templateUrl: 'view-product.html',
})
export class ViewProductPage {
  product: Array<Product>[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public backendProvider: BackendProvider,  public viewCtrl: ViewController, platform: Platform) {
    this.product = this.navParams.get('product')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewProductPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
}
}
