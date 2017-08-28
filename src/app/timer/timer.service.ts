import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {

    private countdownTimerRef:any = null;
    public countdown:number = 0;
    public pause:boolean = true;
    private init:number;

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
          this.countdown = this.init;
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
          this.countdown = this.countdown -1;
          this.processCountdown();
        }, 1000);
    }
    
    private processCountdown(){
        if(this.countdown == 0){
          // this.onComplete.emit();
          console.log("--countdown end--");
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