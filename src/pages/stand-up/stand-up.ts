import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-stand-up',
  templateUrl: 'stand-up.html',
})
export class StandUpPage {
  reuniao: number;
  participantes: any;

  loadProgress: number = 0;
  loadProgress2: number = 0;
  loadProgress3: number = 0;

  seta: string = "";
  tempo_total: string = "";
  tempo1_participante: string = "";
  tempo2_participante: string = "";
  tempo3_participante: string = "";
  tempo4_participante: string = "";
  tempo5_participante: string = "";


  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  /*  Precisa implementar melhor!  */
  public stopCounter() {

    if (this.loadProgress > 0) {
      setTimeout(this.loadProgress == 0, 6000);
      this.loadProgress = 0;
    }
  }



  

  public startCounter() {
    if (this.reuniao == 5 && this.participantes == 2) {

      this.tempo_total = "5 minutos";
      this.tempo1_participante = "45s";
      this.tempo2_participante = "1:00";
      this.tempo3_participante = "1:30";
      this.tempo4_participante = "2:00";
      this.tempo5_participante = "2:30";
      this.seta = "|";

      /*     TOTAL       */
      setInterval(() => {
        if (this.loadProgress < 100) {
          this.loadProgress++;
        }
      }, 3000); //5 minutos


      /*    PARA CADA PARTICIPANTE    */

      //PARTICIPANTE 1: 
      setInterval(() => {
        if (this.loadProgress2 < 50) {
          this.loadProgress2++;
        }
      }, 3000); //2,3 minutos 3000!!

      // PARTICIPANTE 2:
      this.loadProgress3 = -1;
      setInterval(() => {
        if (this.loadProgress2 == 50) {
          if (this.loadProgress3 < 50) {
            this.loadProgress3++;
          }
        }
      }, 3000); //2,3 minutos 3000!!
    } 
  }
}
