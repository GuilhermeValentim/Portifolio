import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  currentTime = moment().format("H:mm:ss");

  morningTime1 = moment().format("06:00:00");
  morningTime2 = moment().format("11:59:59");

  afternoonTime1 = moment().format("12:00:00");
  afternoonTime2 = moment().format("17:59:59");

  nightTime1 = moment().format("18:00:00");
  nightTime2 = moment().format("23:59:59");

  greetings: string;
  isChanged = false;
  greetingPhoto: string;

  public perfil = {
    nome: "Guilherme Pimenta",
    idade: "20 anos",
    formacao: "Último semestre em Análise e Desenvolvimento de Sistemas",
    foco: "Desenvolvimento Mobile"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) { }


  color() {
    this.isChanged = true;
  }

  public openObject() {
    console.log();
  }



  /* EM PROGRESSO */
  /* Utilizando a classe Moment para pegar o horário do dispositivo */
  ionViewDidLoad() {
    if (this.currentTime >= this.morningTime1 && this.currentTime < this.morningTime2) {
      this.greetings = "Bom Dia!";
      console.log("É mais que 6 horas da manhã! /o/");
      this.isChanged = true;
      this.greetingPhoto = "assets/imgs/morning.jpg";
    }

    else if (this.currentTime >= this.afternoonTime1 && this.currentTime < this.afternoonTime2) {
      this.greetings = "Boa Tarde!";
      console.log("É mais que 12 horas da tarde! /o/");
      this.isChanged = true;
      this.greetingPhoto = "assets/imgs/afternoon.jpg";
    }

    else if (this.currentTime >= this.nightTime1 && this.currentTime < this.nightTime2) {
      this.greetings = "Boa Noite!";
      console.log("É mais que 6 horas da noite! /o/");
      this.isChanged = true;
      this.greetingPhoto = "assets/imgs/night.jpg";
    }
  }
}