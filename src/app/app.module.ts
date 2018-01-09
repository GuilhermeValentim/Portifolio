import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StandUpPage } from '../pages/stand-up/stand-up';
import { PlanningPokerPage } from "../pages/planning-poker/planning-poker";
import { PomodoroPage } from "../pages/pomodoro/pomodoro";

import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { ProgressBarComponentRed } from "../components/progress-bar-red/progress-bar-red";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StandUpPage,
    PlanningPokerPage,
    PomodoroPage, 
    ProgressBarComponent,
    ProgressBarComponentRed
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StandUpPage,
    PlanningPokerPage,
    PomodoroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
