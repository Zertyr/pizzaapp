import { Component, ViewChild } from '@angular/core';
import { Nav,Platform, Events} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
//Native Components
import { NativeStorage } from '@ionic-native/native-storage';

import { HomePage } from '../pages/home/home';
import { ProductPage } from '../pages/product/product';
import { CategoryPage } from '../pages/category/category';
import { MenuPage } from '../pages/menu/menu';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { Geolocation } from '@ionic-native/geolocation';
import { BackendProvider } from "../providers/backend/backend"

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any=HomePage;
  pages: Array<{title: string, component: any}>;

  constructor( public alertCtrl: AlertController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private nativeStorage: NativeStorage, private geolocation: Geolocation, public events: Events , public backendProvider: BackendProvider) {
    console.log('nativeStorage : ' + this.nativeStorage.getItem('tutorial'));
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      this.getTuto();

            // get current position
            geolocation.getCurrentPosition().then(pos => {
              console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
            });
      
            const watch = geolocation.watchPosition().subscribe(pos => {
              console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
            });
      
            // to stop watching
            watch.unsubscribe();
            events.subscribe('geo:show', data => {
              // user and time are the same arguments passed in `events.publish(user, time)`
              this.backendProvider.presentToast(data);
            });
      splashScreen.hide();
      
  });

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Product', component: ProductPage },
      { title: 'Category', component: CategoryPage },
      { title: 'Menu', component: MenuPage }
    ];
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
  


  public getTuto():void {
    this.nativeStorage.getItem('tutorial').then(hasSeenTutorial => {
      console.log(hasSeenTutorial)
      if(hasSeenTutorial){
         this.rootPage = HomePage;
       }else {
        this.rootPage = WelcomePage;
      }
    }, error => console.error(error));
  }
}