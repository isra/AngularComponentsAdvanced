import { Component, ViewChild, ViewChildren, QueryList, 
  AfterViewInit ,AfterContentInit, ChangeDetectorRef, ElementRef } from '@angular/core';

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
  @ViewChild('timerInput') public timerInput: ElementRef;
  
  private alertViewIsActive: boolean = false;
  
  ngAfterContentInit(): void {
  }
  
  ngAfterViewInit(): void {    
    this.alerts.forEach(alert => {
      if (!alert.title) {        
        alert.title = "Hello";
        alert.message = "World";
      }      
    });
    this.cdRef.detectChanges();

    console.log(this.timerInput);
    this.timerInput.nativeElement.classList.add('input-time');
    this.timerInput.nativeElement.placeholder = "set time";
    
  }
  

  constructor(private cdRef:ChangeDetectorRef) {     
  }

  showLogCountdown():void {
    //console.log("--Countdown is finished");
  }

  showAlertView() {
    this.alertViewIsActive = true;
    setTimeout(()=>{
      this.timerInput.nativeElement.focus();
    });
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
