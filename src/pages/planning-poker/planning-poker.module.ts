import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanningPokerPage } from './planning-poker';

@NgModule({
  declarations: [
    PlanningPokerPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanningPokerPage),
  ],
})
export class PlanningPokerPageModule {}
