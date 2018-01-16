import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pomodoro',
  templateUrl: 'pomodoro.html',
})
export class PomodoroPage {

  loadProgress: number = 0;
  loadProgress2: number = 0;
  loadProgress3: number = 0;
  loadProgress4: number = 0;

  tarefa: string = "";
  pomodoro: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public startPomodoro1() {
    if (this.tarefa == "") {
    } else {
      // TEMPO TOTAL
      this.startTempoTotal();

      // POMODORO 1
      setInterval(() => {
        if (this.loadProgress3 < 100) {
          this.loadProgress3++;
        }
      }, 100); //25 MINUTOS! ****
    }
  }


  public startTempoTotal(){
    setInterval(() => {
      if (this.loadProgress < 100) {
        this.loadProgress++;
        this.startDescanso();
      }
    }, 100); //25 MINUTOS! ****
  }

  
  public startDescanso() {
    if (this.loadProgress == 100) {
      setInterval(() => {
        if (this.loadProgress2 < 100) {
          this.loadProgress2++;
          this.startPomodoro2();
        }
      }, 100); //5 MINUTOS! ****
    }
  }

  public startPomodoro2() {
    // POMODORO 2
    if (this.loadProgress2 == 100) {
      setInterval(() => {
        if (this.loadProgress4 < 100) {
          this.loadProgress4++;
        }
      }, 100); //5 MINUTOS! ****
    }
    this.loadProgress = 0;
  }
}
