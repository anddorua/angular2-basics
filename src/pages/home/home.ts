import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from "../users/users";
import { ShopPage } from "../shop/shop";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToUsers(): Promise<any> {
    return this.navCtrl.push(UsersPage);
  }

  onShop(): Promise<any> {
    return this.navCtrl.push(ShopPage);
  }
}
