import { Component, OnInit, ContentChild, AfterContentInit, OnDestroy } from '@angular/core';
import { TabComponent } from "app/tab/tab.component";
import { Tab } from "../tab/tab.interface";
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnDestroy, AfterContentInit {
  
  
   
  @ContentChild(TabComponent) tab: TabComponent;
  public clickEndSubscription: Subscription;
  
  public tabs:Tab[] = [];
  
  constructor() { }
  
  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log(this.tab);
    this.addTab(this.tab);
    this.clickEndSubscription = this.tab.onClick.subscribe(()=>{
      console.log("Click on tab");
    });
  }

  addTab(tab:Tab){
    if (this.tabs.length === 0) {
      tab.isActive = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab:Tab) {
    for (let tab of this.tabs){
      tab.isActive = false;
    }
    tab.isActive = true;
  }
  
  ngOnDestroy():void {
    if (this.clickEndSubscription) {
      this.clickEndSubscription.unsubscribe();
    }
  }

}
