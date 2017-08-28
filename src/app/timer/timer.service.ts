import { Injectable } from '@angular/core';

import { Subject } from "rxjs/Subject";

import { BehaviorSubject  } from 'rxjs/BehaviorSubject';

@Injectable()
export class TimerService {

    private countdownTimerRef:any = null;
    //public countdown:number = 0;
    public pause:boolean = true;
    private init:number;

    private countdownEndSource = new Subject<void>();
    private countdownSource = new BehaviorSubject<number>(0);
    public countdownEnd$ = this.countdownEndSource.asObservable();
    public countdown$ = this.countdownSource.asObservable();

    constructor() {}

    destroy():void{
        this.clearTimeout();
    }
    
    toggleCountdown():void {
        this.pause = !this.pause;
        if (this.pause === false) {
            this.doCountdown();
        } else {
            this.clearTimeout();
        }
    }
    
    restartCountdown(init:any){
        if (init)
            this.init = init;

        if(this.init && this.init >0){
          this.pause = true;
          this.clearTimeout();
          this.countdownSource.next(this.init);
          // this.countdown = this.init;
          //this.doCountdown();      
        }
    }
      /*
      startCountdown(){
        if(this.init && this.init >0){
          this.clearTimeout();
          this.countdown = this.init;
          this.doCountdown();
        }
      }
      */
    
    private doCountdown(){
        this.countdownTimerRef = setTimeout(()=>{
          this.countdownSource.next(this.countdownSource.getValue() - 1);
          this.processCountdown();
        }, 1000);
    }
    
    private processCountdown(){
        if(this.countdownSource.getValue() === 0){
          // this.onComplete.emit();
          this.countdownEndSource.next();
          //console.log("--countdown end--");
        }
        else{
          this.doCountdown();
        }
    }
    
    private clearTimeout(){
        if(this.countdownTimerRef){
          clearTimeout(this.countdownTimerRef);
          this.countdownTimerRef = null;
        }
    }

}