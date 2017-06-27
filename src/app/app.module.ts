import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { UsersPageModule } from '../pages/users/users.module';
import { ShopPageModule } from '../pages/shop/shop.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserPage } from "../pages/users/user/user";
import {BuyoutPage} from "../pages/buyout/buyout";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserPage,
    BuyoutPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    UsersPageModule,
    ShopPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserPage,
    BuyoutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
