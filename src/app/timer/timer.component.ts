import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TimerService } from "app/timer/timer.service";

import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init:number = 0;

  private countdownEndSubscription:Subscription = null;
  private countdownProgressEndSubscription: Subscription = null;
  private countdown: number;
  

  constructor(private timer:TimerService,
  private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.timer.restartCountdown(this.init);

    this.countdownEndSubscription = this.timer.countdownEnd$.subscribe(() => {
        console.log("---End countdown");
        this.onComplete.emit();
    });

    this.countdownProgressEndSubscription = this.timer.countdown$.subscribe((value) => {
      this.countdown = value;      
    });

    //this.startCountdown();
    // if (this.init && this.init > 0) {
      // this.countdown = this.init;      
    // }
  }

  get progress():number {
    console.log('progess change');
    this.cdRef.markForCheck();
    return (this.init-(this.countdown))/this.init*100;
  }

  ngOnDestroy():void{    
    this.timer.destroy();
    this.countdownEndSubscription.unsubscribe();
    this.countdownProgressEndSubscription.unsubscribe();
  }

  

}
