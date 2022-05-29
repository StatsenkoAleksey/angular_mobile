import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import { HotelsPage } from '../hotels/hotels';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController) {
  }

  openHotelsPage() {
    this.navCtrl.push(HotelsPage);
  }

}
