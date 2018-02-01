import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StandUpPage } from "../../pages/stand-up/stand-up";
import { PlanningPokerPage } from "../../pages/planning-poker/planning-poker";
import { PomodoroPage } from "../../pages/pomodoro/pomodoro";
import { AboutPage } from "../../pages/about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  public openMeetingPage(){
    this.navCtrl.push(StandUpPage);
  }
  public openPomodoroPage(){
    this.navCtrl.push(PomodoroPage);
  }
  public openPokerPage(){
    this.navCtrl.push(PlanningPokerPage);
  }
  public openAboutPage(){
    this.navCtrl.push(AboutPage);
  }
}