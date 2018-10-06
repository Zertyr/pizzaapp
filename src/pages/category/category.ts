import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import { BackendProvider } from '../../providers/backend/backend';
import { FilterByCategoryPipe } from '../../pipes/filter-by-category/filter-by-category';
/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  categories: [any]
  products: [any]
  constructor(public navCtrl: NavController, public navParams: NavParams, public backendProvider: BackendProvider, platform: Platform) {
  }
  showCategories(){
    this.backendProvider.getProducts().subscribe(products => {
      this.products = products
      })
        this.backendProvider.getCategories().subscribe(categories => {
          this.categories = categories
          })
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
    this.showCategories();
  }

}
