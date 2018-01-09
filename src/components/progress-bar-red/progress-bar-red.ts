import { Component, Input } from '@angular/core';
@Component({
  selector: 'progress-bar-red',
  templateUrl: 'progress-bar-red.html'
})
export class ProgressBarComponentRed {

  @Input ('progress') progress;

  constructor() {
    
  }

}
