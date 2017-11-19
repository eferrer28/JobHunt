import { FirebaseProvider } from './../providers/firebase/firebase';
import { StatisticsPage } from './../pages/statistics/statistics';

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
  //? means it is optional
  index?: number;
  icon: string;
  component: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
  rootPage: any ='HomePage';
  
 
  pages: PageInterface[] = [
    { title: 'Applications', pageName: 'HomePage', component: 'HomePage', tabComponent: 'HomePage', index: 0, icon: 'home' },
    { title: 'New Entries ', pageName: 'HomePage', component: 'HomePage', tabComponent: 'HomePage', index: 0, icon: 'home' },
    { title: 'Company List ', pageName: 'CompaniesPage', component: 'CompaniesPage', icon: 'home', },
    
    { title: 'Closed', pageName: 'ClosedAppsPage', component: 'ClosedAppsPage', tabComponent: 'ClosedAppsPage', index: 2, icon: 'close' },

    { title: 'Profile', pageName: 'ProfilePage', component: 'ProfilePage', icon: 'person' },
    
  ];



  accountPages: PageInterface[] = [
    { title: 'Profile', pageName: 'ProfilePage', component: 'ProfilePage', icon: 'person' },

    { title: 'Statistics', pageName: 'StatisticsPage', component: 'StatisticsPage', tabComponent: 'StatistcsPage', index: 2, icon: 'stats'},
   
    { title: 'Logout', pageName: 'LogoutPage', component: 'LogoutPage', icon: 'log-out'}


    
  ];





  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
                private afAuth: AngularFireAuth, public fb: FirebaseProvider) {

    //from tutorial https://aaronczichon.de/2017/03/07/ionic-firebase-authentication/
    this.afAuth.authState.subscribe(auth => {
      if(!auth)
        this.rootPage = LoginPage;
      else
        this.rootPage = 'TabsPage';
    });
    

    this.initializeApp();

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
    console.log("la tee dah");
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
    
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);

    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      console.log(page.pageName);
      console.log(params);
      this.nav.setRoot(page.pageName, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
  });
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


