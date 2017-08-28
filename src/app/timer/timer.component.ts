import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { TimerService } from "app/timer/timer.service";

import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService]

})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init:number = 0;

  private countdownEndSubscription:Subscription = null;
  

  constructor(private timer:TimerService) { }

  ngOnInit(): void {
    this.timer.restartCountdown(this.init);

    this.countdownEndSubscription = this.timer.countdownEnd$.subscribe(() => {
        console.log("---End countdown");
        this.onComplete.emit();

    });

    //this.startCountdown();
    // if (this.init && this.init > 0) {
      // this.countdown = this.init;      
    // }
  }

  ngOnDestroy():void{    
    this.timer.destroy();
    this.countdownEndSubscription.unsubscribe();
  }

  

}
