import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hotel, HotelInfoPage } from '../hotel-info/hotel-info';

@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html'
})
export class HotelsPage implements OnInit {
  public hasParking: boolean = false;
  public minCost: number;
  public maxCost: number;
  hotels: Array<Hotel>;
  allHotels: Array<Hotel>;

  constructor(public navCtrl: NavController) {
    this.allHotels = [
      {
        imageUrl: 'https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg',
        title: 'Будапешт',
        description: 'Московский отель "Будапешт"',
        roomCost: 5000,
        hasParking: true,
        address: 'Москва, ул. Петровские Линии, 2',
        phone: '8 (495) 729-35-01'
      },
      {
        imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
        title: 'Космос',
        description: 'Гостиница "Космос"',
        roomCost: 3000,
        hasParking: true,
        address: 'Москва, пр-т Мира, 150',
        phone: '8 (495) 234-12-06'
      },
      {
        imageUrl: 'https://avatars.mds.yandex.net/get-altay/879259/2a0000016156f0d392e7d8da7592698bd77d/XXXL',
        title: 'Бета Измайлово',
        description: 'Отель "Бета Измайлово"',
        roomCost: 2520,
        hasParking: true,
        address: 'Москва, Измайловское шоссе, 71, корп. 2Б',
        phone: '8 (495) 234-12-06'
      },
      {
        imageUrl: 'https://cdn.worldota.net/t/640x400/content/f5/f9/f5f982304c2f24510a6597bb05afd06441772057.jpeg',
        title: 'NOVOTEL Москва Сити',
        description: 'Отель "NOVOTEL Москва Сити"',
        roomCost: 12000,
        hasParking: true,
        address: 'Москва, Пресненская набережная, 2',
        phone: '8 (495) 234-12-06'
      },
      {
        imageUrl: 'https://cdn.worldota.net/t/640x400/extranet/75/2e/752eb2c8854aaf60b07223615482dd7a0ad299ef.jpeg',
        title: 'Gesten',
        description: 'Отель "Gesten"',
        roomCost: 3600,
        hasParking: false,
        address: 'Москва, Sadovnicheskaya Embankment, 17',
        phone: '8 (495) 234-12-06'
      },
      {
        imageUrl: 'https://cdn.worldota.net/t/640x400/extranet/7d/6b/7d6b580984bbd55cf74ea8773c5e5175880acd9e.jpeg',
        title: 'Золотой Колос',
        description: 'Отель "Золотой Колос"',
        roomCost: 2500,
        hasParking: false,
        address: 'Москва, Улица Ярославская 15, корпус 3',
        phone: '8 (495) 234-12-06'
      },
      {
        imageUrl: 'https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg',
        title: 'Будапешт',
        description: 'Московский отель "Будапешт"',
        roomCost: 5000,
        hasParking: true,
        address: 'Москва, ул. Петровские Линии, 2',
        phone: '8 (495) 729-35-01'
      },
      {
        imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
        title: 'Космос',
        description: 'Гостиница "Космос"',
        roomCost: 3000,
        hasParking: true,
        address: 'Москва, пр-т Мира, 150',
        phone: '8 (495) 234-12-06'
      },
      {
        imageUrl: 'https://avatars.mds.yandex.net/get-altay/879259/2a0000016156f0d392e7d8da7592698bd77d/XXXL',
        title: 'Бета Измайлово',
        description: 'Отель "Бета Измайлово"',
        roomCost: 2520,
        hasParking: true,
        address: 'Москва, Измайловское шоссе, 71, корп. 2Б',
        phone: '8 (495) 234-12-06'
      },
      {
        imageUrl: 'https://cdn.worldota.net/t/640x400/content/f5/f9/f5f982304c2f24510a6597bb05afd06441772057.jpeg',
        title: 'NOVOTEL Москва Сити',
        description: 'Отель "NOVOTEL Москва Сити"',
        roomCost: 12000,
        hasParking: true,
        address: 'Москва, Пресненская набережная, 2',
        phone: '8 (495) 234-12-06'
      },
      {
        imageUrl: 'https://cdn.worldota.net/t/640x400/extranet/75/2e/752eb2c8854aaf60b07223615482dd7a0ad299ef.jpeg',
        title: 'Gesten',
        description: 'Отель "Gesten"',
        roomCost: 3600,
        hasParking: false,
        address: 'Москва, Sadovnicheskaya Embankment, 17',
        phone: '8 (495) 234-12-06'
      },
      {
        imageUrl: 'https://cdn.worldota.net/t/640x400/extranet/7d/6b/7d6b580984bbd55cf74ea8773c5e5175880acd9e.jpeg',
        title: 'Золотой Колос',
        description: 'Отель "Золотой Колос"',
        roomCost: 2500,
        hasParking: false,
        address: 'Москва, Улица Ярославская 15, корпус 3',
        phone: '8 (495) 234-12-06'
      }
    ];

  }

  ngOnInit() {
    this.setFilteredItems();
  }

  setFilteredItems() {    
    this.hotels = this.allHotels.filter(hotel => {
      if (this.hasParking && hotel.hasParking !== this.hasParking) {
        return false;
      }
      if (this.minCost && hotel.roomCost < this.minCost) {
        return false;
      }
      if (this.maxCost && hotel.roomCost > this.maxCost) {
        return false;
      }
      return true;
    });
  }

  openHotelInfoPage(hotel: Hotel) {    
    this.navCtrl.push(HotelInfoPage, {hotel});
  }

}
