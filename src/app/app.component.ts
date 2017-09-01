import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private timers:number[] = [3];
  private time:number = 0;

  private alertViewIsActive: boolean = false;
  private alertViewCountdownFinished: boolean = false;
  

  constructor() {     
  }

  showLogCountdown():void {
    //console.log("--Countdown is finished");
  }

  showAlertView() {
    this.alertViewIsActive = true;
  }

  hideAlertView() {
    this.alertViewIsActive = false;
  }

  addTimer():void {
    this.timers.push(this.time);
    this.hideAlertView();
  }

  showAlertViewCountdownFinished() {
    this.alertViewCountdownFinished = true;
  }

  hideAlertViewCountdownFinished() {
    this.alertViewCountdownFinished = false;
  }

}
