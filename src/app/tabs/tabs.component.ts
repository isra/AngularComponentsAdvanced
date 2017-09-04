import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, OnDestroy } from '@angular/core';
import { TabComponent } from "app/tab/tab.component";
import { Tab } from "../tab/tab.interface";
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnDestroy, AfterContentInit {
  
  @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>;
  
  public clickEndSubscriptions: Subscription[] = [];
  
  
  
  constructor() { }
  
  ngOnInit() {
  }

  ngAfterContentInit(): void {    
    //console.log(this.tabs);    
    this.tabs.forEach(tab => {
      let subscription = tab.onClick.subscribe(()=>{
        console.log(`select ${tab.title} selected`);
      });      
      this.clickEndSubscriptions.push(subscription);
    });
    this.selectTab(this.tabs.first);
    
  }

  selectTab(tab:Tab) {
    this.tabs.forEach(tab => {
      tab.isActive = false;
    });
    tab.isActive = true;
  }
  
  ngOnDestroy():void {    
    this.clickEndSubscriptions.forEach(tab=>tab.unsubscribe());
  }

}
