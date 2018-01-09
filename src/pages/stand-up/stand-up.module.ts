import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StandUpPage } from './stand-up';

@NgModule({
  declarations: [
    StandUpPage,
  ],
  imports: [
    IonicPageModule.forChild(StandUpPage),
  ],
})
export class StandUpPageModule {}
