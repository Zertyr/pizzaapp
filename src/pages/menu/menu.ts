import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import { BackendProvider } from '../../providers/backend/backend';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  menus: [any]
  products: [any]
  constructor(public navCtrl: NavController, public navParams: NavParams, public backendProvider: BackendProvider, platform: Platform) {
  }
  showMenus(){
    this.backendProvider.getProducts().subscribe(products => {
      this.products = products
      })
        this.backendProvider.getMenus().subscribe(menus => {
          this.menus = menus
          })
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
    this.showMenus();
  }

}
