import { StatisticsPage } from './../statistics/statistics';
import { JobEntryPage } from './../job-entry/job-entry';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClosedAppsPage } from './../closed-apps/closed-apps';
import { HomePage } from './../home/home';
/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage{
// set the root pages for each tab
tab1Root: any = HomePage;
tab2Root: any = JobEntryPage;
tab3Root: any = StatisticsPage;
//tab4Root: any = AboutPage;
mySelectedIndex: number;

constructor(navParams: NavParams) {
  this.mySelectedIndex = navParams.data.tabIndex || 0;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
