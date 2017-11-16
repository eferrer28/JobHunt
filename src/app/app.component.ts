import { SelectedPage } from './../pages/selected/selected';
import { ClosedAppsPage } from './../pages/closed-apps/closed-apps';

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { JobEntryPage } from '../pages/job-entry/job-entry';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from './../pages/profile/profile';
import { AngularFireAuth } from 'angularfire2/auth';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  
 
  pages: PageInterface[] = [
    { title: 'Recent', pageName: 'HomePage', tabComponent: 'HomePage', index: 0, icon: 'home' },
    { title: 'Pending', pageName: 'SelectedPage', tabComponent: 'SelectedPage', index: 1, icon: 'contacts' },
  
    { title: 'Closed', pageName: 'ClosedAppsPage', tabComponent: 'ClosedAppsPage', index: 2, icon: 'contacts' },
    { title: 'Application Stats', pageName: 'LogoutPage',  icon: 'home'},
    
    { title: 'Logout', pageName: 'LogoutPage',  icon: 'home'}
    
  ];




  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
                private afAuth: AngularFireAuth) {

    //from tutorial https://aaronczichon.de/2017/03/07/ionic-firebase-authentication/
    this.afAuth.authState.subscribe(auth => {
      if(!auth)
        this.rootPage = LoginPage;
      else
        this.rootPage = 'TabsPage';
    });
    

    this.initializeApp();

    /*
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Job Entry', component: JobEntryPage },
      { title: 'In Interviews', component: SelectedPage },
      
      { title: 'Closed Applications', component: ClosedAppsPage },
      { title: 'Profile', component: ProfilePage},
      { title: 'Logout', component: LogoutPage}
    ];
    */
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
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


