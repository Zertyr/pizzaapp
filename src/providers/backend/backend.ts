import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the BackendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackendProvider {
headers = new Headers();
apiURL= 'https://cors-anywhere.herokuapp.com/http://fast-badlands-48562.herokuapp.com/api/1.0'
  constructor(public http: Http) {
    console.log('Hello BackendProvider Provider');
    // this.headers.append();
  }

 getProducts(){
  return this.http.get(this.apiURL+'/products', { headers:this.headers } ).map(response => response.json());
 }

 getMenus(){
  return this.http.get(this.apiURL+'/menus', { headers:this.headers } ).map(response => response.json());
 }

 getCategories(){
  return this.http.get(this.apiURL+'/categories', { headers:this.headers } ).map(response => response.json());
 }

}
