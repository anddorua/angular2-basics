import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {BuyoutPage} from "../buyout/buyout";

/**
 * Generated class for the ShopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  products: string[] = ['Milk', 'Bread', 'Apples'];

  constructor(public navCtrl: NavController) {
  }

  onBuyout(productName) {
    this.navCtrl.push(BuyoutPage, { productName: productName });
  }

}
