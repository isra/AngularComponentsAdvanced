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
  

  constructor() { 
    this.alertViewIsActive = false;
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

}
