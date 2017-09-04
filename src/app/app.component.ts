import { Component, ViewChild, AfterContentInit } from '@angular/core';

import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  
  private timers:number[] = [3,15,20];
  private time:number = 0;

  @ViewChild(SimpleAlertViewComponent) public alert:SimpleAlertViewComponent;
  
  private alertViewIsActive: boolean = false;
  private alertViewCountdownFinished: boolean = false;

  ngAfterContentInit(): void {
    console.log(this.alert);
    this.alert.show();
    this.alert.title = "Hello";
    this.alert.message = "World";
  }
  

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
