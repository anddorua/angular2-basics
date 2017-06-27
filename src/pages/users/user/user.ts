import {Component, OnInit} from "@angular/core";
import {NavParams, NavController} from "ionic-angular";
/**
 * Created by nickpe on 27.06.17.
 */

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage implements OnInit {

  name: string;

  constructor (private navParams: NavParams, private navController: NavController) {}

  ngOnInit(): void {
    this.name = this.navParams.get('userName');
  }

}
