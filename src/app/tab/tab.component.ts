import { Component, OnInit, Input } from '@angular/core';
import { Tab } from "./tab.interface";
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, Tab {

  @Input() title:string;
  public isActive:boolean = false;

  constructor(private tabs: TabsComponent) { }

  ngOnInit() {
    this.tabs.addTab(this);
  }

}
