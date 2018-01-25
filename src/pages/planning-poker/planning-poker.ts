import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NumbersPage } from '../numbers/numbers';

@IonicPage()
@Component({
  selector: 'page-planning-poker',
  templateUrl: 'planning-poker.html',
})
export class PlanningPokerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public open0NumberPage() {
    this.navCtrl.push(NumbersPage);
  }

  public open1NumberPage() {
    this.navCtrl.push(NumbersPage);
  }

  public open2NumberPage() {
    this.navCtrl.push(NumbersPage);
  }

  public open3NumberPage() {
    this.navCtrl.push(NumbersPage);
  }

  public open5NumberPage() {
    this.navCtrl.push(NumbersPage);
  }

  public open8NumberPage() {
    this.navCtrl.push(NumbersPage);
  }

  public open13NumberPage() {
    this.navCtrl.push(NumbersPage);
  }

  public open20NumberPage() {
    this.navCtrl.push(NumbersPage);
  }

  public open40NumberPage() {
    this.navCtrl.push(NumbersPage);
  }

  public open100NumberPage() {
    this.navCtrl.push(NumbersPage);
  }

  public openDoubtNumberPage() {
    this.navCtrl.push(NumbersPage);
  }
}
