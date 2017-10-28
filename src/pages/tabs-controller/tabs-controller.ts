import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChooseAreaPage } from '../choose-area/choose-area';
import { MyProfilePage } from '../my-profile/my-profile';
import { AvailableTradersPage } from '../available-traders/available-traders';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = ChooseAreaPage;
  tab2Root: any = MyProfilePage;
  tab3Root: any = AvailableTradersPage;
  constructor(public navCtrl: NavController) {
  }
  
}
