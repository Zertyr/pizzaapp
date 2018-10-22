import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';

import { ProductPage } from '../product/product';
import { BackendProvider } from '../../providers/backend/backend';
import { BasketPage } from '../../pages/basket/basket';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public backendProvider: BackendProvider,  public modalCtrl: ModalController) {  }



  presentPrompt() {
  const prompt = this.alertCtrl.create({
    title: 'Qui êtes vous ?',
    inputs: [
      {
       placeholder:"firstname",
       name:"firstname",
      },
      {
        placeholder:"lastname",
        name:"lastname",
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },

      {
      text: 'Valider',
      handler: data => {
        this.navCtrl.push(ProductPage,{
          firstname : data.firstname,
          lastname : data.lastname
        })
      }

    }
    ]
  });
  prompt.present();
}
openBasicModal() {
  let myModal = this.modalCtrl.create(BasketPage);
  myModal.present();
}

goToProducts(){
  console.log("test")
  this.navCtrl.push(ProductPage, {

    firstname : "Damien",
    lastname : "Leusiere"

  })
}

}
