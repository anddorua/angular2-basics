import {Component, OnInit} from "@angular/core";
import {NavParams, NavController} from "ionic-angular";
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage implements OnInit {
  productName: string;
  constructor (private navParams: NavParams, private navController: NavController){}

  ngOnInit(): void {
    this.productName = this.navParams.get('productName');
  }

  onBuy() {
    this.navController.popToRoot();
  }
}
