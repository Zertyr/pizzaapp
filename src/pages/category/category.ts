import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, ModalController } from 'ionic-angular';
import { ViewProductPage } from '../view-product/view-product'
import { BackendProvider } from '../../providers/backend/backend';
import { FilterByCategoryPipe } from '../../pipes/filter-by-category/filter-by-category';
import { BasketPage } from '../../pages/basket/basket';
import { Product } from '../../models/product';
import { Category } from '../../models/category';
import { QuantityPage } from '../quantity/quantity';


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
  categories: Array<Category>[]
  products: Array<Product>[]
  idCategorie: any
  items: Array<string>
  basketLength: any
  terms: string
  showSearch: boolean = false
  quantity = this.backendProvider.quantity

  constructor(public navCtrl: NavController, public navParams: NavParams, public backendProvider: BackendProvider, platform: Platform, public alertCtrl: AlertController, public modalCtrl: ModalController) {
    
  }

  showCategories(){
        this.backendProvider.getCategories().subscribe(categories => {
          this.categories = categories
          })
  }
  showProducts(){
    this.backendProvider.getProducts().subscribe(products => {
      this.products = products
      })
}
  viewProduct(){
    this.navCtrl.push(ViewProductPage,{
      
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
    this.showCategories();
    this.showProducts();
    if(this.quantity != 0){
      this.backendProvider.showBadge = true;
}
    // if (this.backendProvider.quantity != 0) {
    //   this.basketLength = this.backendProvider.getBasketLength();
    // }else if (this.backendProvider.getBasketLength() < this.backendProvider.getQuantity()) {
    //   this.basketLength = this.backendProvider.quantity;
    // }

  }

  addBasket(product) {
    this.backendProvider.addBasket(product);
    if(this.backendProvider.showBadge == false){
      this.backendProvider.showBadge = true;
}
    console.log(this.backendProvider.quantity);
  }

  onChange(event){
    console.log(event);
    console.log(event.value);
    this.idCategorie = event.value;
    this.backendProvider.getProductsByCategorieId(this.idCategorie).subscribe(products => {
      this.products = products
      })
    this.terms = "";
  }
  openModalViewProduct(product) {
    let myModal = this.modalCtrl.create(ViewProductPage, { 'product': product });
    console.log(this.backendProvider.quantity);
    myModal.present();
    
}

openModalQuantity(product) {
  let myModal = this.modalCtrl.create(QuantityPage, { 'product': product });
  myModal.present();
}

openBasicModal() {
  let myModal = this.modalCtrl.create(BasketPage);
  myModal.present();
}

  openSearch(){
    if(this.showSearch == false){
      this.showSearch = true;
    }else{
      this.showSearch = false;
    }
  }
  getShowBadge(){
    return this.backendProvider.showBadge
  }
  // quantityPrompt(){
  //   const prompt = this.alertCtrl.create({
 
  //     title: 'Qui êtes vous ?',
  //     buttons: [
  //       {
  //        text:"firstname",
  //        role:"add",
  //       },
  //       {
  //         text:"lastname",
  //         role:"remove",
  //       },

  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  
  //       {
  //       text: 'Valider'
  //       }
  
      
  //     ]
  //   });
  //   prompt.present();
  // }

}
