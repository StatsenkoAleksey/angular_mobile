import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-hotel-info',
  templateUrl: 'hotel-info.html',
})
export class HotelInfoPage {

  hotel: Hotel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.hotel = this.navParams.get("hotel");
  }

}

export interface Hotel  {
  imageUrl: string,
  title: string,
  description: string,
  roomCost: number,
  hasParking: boolean,
  address: string,
  phone: string
}
