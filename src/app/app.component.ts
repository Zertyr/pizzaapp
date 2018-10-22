import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController, AlertController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ProductPage } from '../pages/product/product';
import { CategoryPage } from '../pages/category/category';
import { MenuPage } from '../pages/menu/menu';
import { LoginPage } from '../pages/login/login';
import { ViewProductPage } from '../pages/view-product/view-product';

import { NgIf } from '@angular/common';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;
  constructor( public alertCtrl: AlertController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Product', component: ProductPage },
      { title: 'Category', component: CategoryPage },
      { title: 'Menu', component: MenuPage }
    ];
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
  

    if(page.title != 'Product'){
      this.nav.setRoot(page.component);
    }else{
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
            this.nav.push(ProductPage,{
              firstname : data.firstname,
              lastname : data.lastname
            })
          }
    
        }
        ]
      });
      prompt.present();
    }
  }
  
}