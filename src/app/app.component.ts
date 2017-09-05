import { Component, ViewChild, AfterViewInit, AfterContentInit, ElementRef, Renderer2, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';

import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit, AfterViewInit {
  
  private timers:number[] = [3,15,20];
  private time:number = 0;
  private simpleAlert: ComponentRef<SimpleAlertViewComponent> = null;

  
  @ViewChild('timerInput') public timerInput: ElementRef;
  @ViewChild('alert', { read: ViewContainerRef }) public alertContainer: ViewContainerRef;
  
  private alertViewIsActive: boolean = false;
  
  ngAfterContentInit(): void {
    const alertFactory = this.resolver.resolveComponentFactory(SimpleAlertViewComponent);
    this.simpleAlert = this.alertContainer.createComponent(alertFactory);
  }
  
  ngAfterViewInit(): void {    
    
    //console.log(this.timerInput);
    //this.timerInput.nativeElement.placeholder = "set time";
    //this.timerInput.nativeElement.setAttribute("placeholder", "enter seconds");
    //this.timerInput.nativeElement.classList.add('input-time');
    this.renderer.addClass(this.timerInput.nativeElement, 'input-time');
    this.renderer.setAttribute(this.timerInput.nativeElement, 'placeholder', 'enter seconds');   

  }  

  constructor(private renderer: Renderer2, private resolver: ComponentFactoryResolver) {     
  } 

  showAlertView() {
    this.alertViewIsActive = true;
    setTimeout(()=>{
      //this.timerInput.nativeElement.focus();
      this.renderer.selectRootElement(this.timerInput.nativeElement).focus();
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
    // this.alerts.first.show()
    this.simpleAlert.instance.show();
  }

  

}
