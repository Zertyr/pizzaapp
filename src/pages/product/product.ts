import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { BackendProvider } from '../../providers/backend/backend';
import { BasketPage } from '../../pages/basket/basket';
/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})

export class ProductPage {  
  
  firstname: string
  lastname: string
  products: [any]
  menus: [any]
  categories: [any]
  
  pet: string = "puppies";
  // isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public backendProvider: BackendProvider, platform: Platform,  public modalCtrl: ModalController) {
    this.firstname = this.navParams.get('firstname')
    this.lastname = this.navParams.get('lastname')
    this.products = this.navParams.get('products')
    // this.isAndroid = platform.is('android');
  }
  showProducts(){
    this.backendProvider.getProducts().subscribe(products => {
      this.products = products
      })
      this.backendProvider.getMenus().subscribe(menus => {
        this.menus = menus
        })
        this.backendProvider.getCategories().subscribe(categories => {
          this.categories = categories
          })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    this.showProducts();
    
  }
  openBasicModal() {
    let myModal = this.modalCtrl.create(BasketPage);
    myModal.present();
  }
}
