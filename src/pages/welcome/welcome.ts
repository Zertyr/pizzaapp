import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { HomePage } from '../home/home'
//Native Components
import { NativeStorage } from '@ionic-native/native-storage';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  public setTutoChecked():void {

    this.nativeStorage.setItem('tutorial', true)
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );
  }
  goHome(){
    this.navCtrl.setRoot(HomePage);
    this.setTutoChecked();
  }

  
}
