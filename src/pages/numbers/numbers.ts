import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Injectable()
@IonicPage()
@Component({
  selector: 'page-numbers',
  templateUrl: 'numbers.html',
})
export class NumbersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumbersPage');
  }

}
