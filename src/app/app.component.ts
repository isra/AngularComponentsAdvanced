import { Component, ViewChildren, QueryList, AfterViewInit ,AfterContentInit, ChangeDetectorRef } from '@angular/core';

import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit, AfterViewInit {
  
  private timers:number[] = [3,15,20];
  private time:number = 0;

  @ViewChildren(SimpleAlertViewComponent) public alerts:QueryList<SimpleAlertViewComponent>;
  
  private alertViewIsActive: boolean = false;
  
  ngAfterContentInit(): void {
  }
  
  ngAfterViewInit(): void {
    console.log(this.alerts);
    this.alerts.forEach(alert => {
      if (!alert.title) {        
        alert.title = "Hello";
        alert.message = "World";
      }      
    });
    this.cdRef.detectChanges();
  }
  

  constructor(private cdRef:ChangeDetectorRef) {     
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
    this.alerts.first.show()
  }

  

}
