import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AvailableTradersPage } from '../available-traders/available-traders';

@Component({
  selector: 'page-choose-area',
  templateUrl: 'choose-area.html'
})
export class ChooseAreaPage {

  constructor(public navCtrl: NavController) {
  }
  goToAvailableTraders(params){
    if (!params) params = {};
    this.navCtrl.push(AvailableTradersPage);
  }
}
