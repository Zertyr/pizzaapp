import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeStorage } from '@ionic-native/native-storage';
import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductPage } from '../pages/product/product';
import { CategoryPage } from '../pages/category/category';
import { MenuPage } from '../pages/menu/menu';
import { LoginPage } from '../pages/login/login';
import { PipesModule } from '../pipes/pipes.module';
import { BackendProvider } from '../providers/backend/backend';
import { HttpModule } from '@angular/http';
import { BasketPage } from '../pages/basket/basket';
import { ViewProductPage } from '../pages/view-product/view-product';
import { QuantityPage } from '../pages/quantity/quantity';
import { WelcomePage } from '../pages/welcome/welcome';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductPage,
    CategoryPage,
    MenuPage,
    LoginPage,
    BasketPage,
    ViewProductPage,
    QuantityPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PipesModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductPage,
    CategoryPage,
    MenuPage,
    LoginPage,
    BasketPage,
    ViewProductPage,
    QuantityPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackendProvider,
    NativeStorage,
    Geolocation
  ]
})
export class AppModule {}
