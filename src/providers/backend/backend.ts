import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ModalController } from 'ionic-angular';

import 'rxjs/add/operator/map';
/*
  Generated class for the BackendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackendProvider {
basket : any[] = []
basketLength : any;
quantity : any = 0;
quantityProducts : number = 0;
showBadge: boolean = false
headers = new Headers();
apiURL= '/api'
  constructor(public http: Http, public modalCtrl: ModalController) {
    console.log('Hello BackendProvider Provider');
    // this.headers.append();
  }

 getProducts(){
  return this.http.get(this.apiURL+'/products', { headers:this.headers } ).map(response => response.json());
 }
 
 getProductsByCategorieId(id){
  return this.http.get(this.apiURL+'/products/categories/'+ id, { headers:this.headers } ).map(response => response.json());
 }
 getMenus(){
  return this.http.get(this.apiURL+'/menus', { headers:this.headers } ).map(response => response.json());
 }

 getCategories(){
  return this.http.get(this.apiURL+'/categories', { headers:this.headers } ).map(response => response.json());
 }

addBasket(product) {
  if(this.basket.indexOf(product) != -1){
    product.quantity = product.quantity + 1;
    this.quantity += 1;
  }else {
    product.quantity =  1;
    this.quantity += 1;
    this.basket.push(product);
    console.log(this.basket);
  }
}
addBasketMultiple(product, quantityProduct){
  this.quantityProducts = parseInt(quantityProduct);
  if(this.basket.indexOf(product) != -1){
      product.quantity = product.quantity + this.quantityProducts ;
      this.quantity += this.quantityProducts;
      if(this.showBadge == false){
        this.showBadge = true;
  }
  }else {
    product.quantity =  0;
      product.quantity = product.quantity + this.quantityProducts ;
      this.quantity += this.quantityProducts ;
        
    this.basket.push(product);
    if(this.showBadge == false){
      this.showBadge = true;
}
    console.log(this.basket);
  }
}

getBasket(){
  return this.basket;
}
getQuantity(){
  return this.quantity;
}


getBasketLength(){
  return this.basket.length
}


}
