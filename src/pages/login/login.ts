import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChooseAreaPage } from '../choose-area/choose-area';
import { AvailableTradersPage } from '../available-traders/available-traders';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToChooseArea(params){
    if (!params) params = {};
    this.navCtrl.push(ChooseAreaPage);
  }goToAvailableTraders(params){
    if (!params) params = {};
    this.navCtrl.push(AvailableTradersPage);
  }
}
