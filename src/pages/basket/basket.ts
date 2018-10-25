import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ViewController, Events} from 'ionic-angular';

import { BackendProvider } from '../../providers/backend/backend';

/**
 * Generated class for the BasketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})

export class BasketPage {
  total: any;
  
  basket : any[] = this.backendProvider.getBasket();
  constructor(public navCtrl: NavController, public navParams: NavParams, public backendProvider: BackendProvider,  public viewCtrl: ViewController, platform: Platform, public events: Events) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasketPage');
    this.total = 0;
    this.totalPrice();
  }
  totalPrice(){
    this.basket.forEach(product => {
      this.total = this.total + product.quantity * product.price;
    });
  }
  addQuantity(product){
    product.quantity = product.quantity+1;
    this.total = this.total +  product.price;
    this.backendProvider.quantity += 1;
    console.log(this.total);
    this.events.publish('product:add', product.name + " ajouté au panier !");
  }
  removeQuantity(product){
    if(product.quantity != 1){
      product.quantity = product.quantity-1;
      this.total = this.total -  product.price;
      this.backendProvider.quantity -= 1;
    }
    console.log(product.quantity);
  }
  goTrash(product){
    this.backendProvider.quantity -= product.quantity;
    this.total = this.total -  (product.quantity * product.price);
    this.basket.splice(this.basket.indexOf(product), 1);
  }
  dismiss() {
    this.viewCtrl.dismiss();
}

}
