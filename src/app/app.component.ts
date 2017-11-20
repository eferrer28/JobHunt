import { FirebaseProvider } from './../providers/firebase/firebase';
import { StatisticsPage } from './../pages/statistics/statistics';

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { JobEntryPage } from '../pages/job-entry/job-entry';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from './../pages/profile/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { MenuController } from 'ionic-angular/components/app/menu-controller';


export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  //? means it is optional
  index?: number;
  icon: string;
  component?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  //rootPage = 'TabPage';
  //rootPage: any;
  rootPage:any = 'HomePage';
  
 
  pages: PageInterface[] = [
    { title: 'Applications', pageName: 'HomePage',  index: 0, icon: 'home' },
    { title: 'New Entries ', pageName: 'JobEntryPage',  index: 1, icon: 'map' },

    { title: 'Statistics', pageName: 'StatisticsPage', index: 2, icon: 'stats'},
    
  ];

  socialPages: PageInterface[] = [

    { title: 'Company List', pageName: 'CompaniesPage', component: 'CompaniesPage', icon: 'log-out'}
    
   

  ];



  accountPages: PageInterface[] = [
    { title: 'Profile', pageName: 'ProfilePage', component: 'ProfilePage', icon: 'person' },
   
    { title: 'Logout', pageName: 'LogoutPage', component: 'LogoutPage', icon: 'log-out'}


    
  ];







  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
                private afAuth: AngularFireAuth, public fb: FirebaseProvider,
              public menu: MenuController) {

    this.initializeApp();
                  

    //from tutorial https://aaronczichon.de/2017/03/07/ionic-firebase-authentication/
    this.afAuth.authState.subscribe(auth => {
      if(!auth)
        this.rootPage = 'LoginPage';
      else
        this.rootPage = 'TabsPage';
    });
    


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
    
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
          params = { tabIndex: page.index };
        }
    
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
          this.nav.getActiveChildNavs()[0].select(page.index);
          // Set the root of the nav with params if it's a tab index
        } else {
          console.log(page.pageName)
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


