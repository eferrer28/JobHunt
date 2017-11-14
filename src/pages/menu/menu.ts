import { LogoutPage } from './../logout/logout';

import { Component, ViewChild } from '@angular/core';
import { TabsPage } from './../tabs/tabs';
import { ClosedAppsPage } from './../closed-apps/closed-apps';
import { HomePage } from './../home/home';
import { SelectedPage } from './../selected/selected';
import {  IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})

export class MenuPage {
  // Basic root for our content view
  rootPage = 'TabsPage';
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'HomePage', pageName: 'HomePage', tabComponent: 'SelectedPage', index: 0, icon: 'home' },
    { title: 'Tab 2', pageName: 'ClosedAppsPage', tabComponent: 'ClosedAppsPage', index: 1, icon: 'contacts' },
    { title: 'Logout', pageName: 'LogoutPage', tabComponent: LogoutPage, index: 2, icon: 'home'}
    
  ];
 
  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad menu teee');
  }
 
  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
    
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNavs() && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNavs()[0];
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
 
}
