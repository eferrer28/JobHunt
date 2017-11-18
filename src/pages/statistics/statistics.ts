import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the StatisticsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {

  entries = [];
  applicationTotal = 0;
  rejectionTotal = 0;
  ghostedTotal = 0;
  selectionCount = 0;
  pendingCount = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FirebaseProvider) {
  }

  ionViewDidLoad() {
    this.fb.authState.subscribe(user => {
      if (user) {


    console.log('ionViewDidEnter JobstatusPage');

    

    this.fb.getStats().subscribe(data => {
      console.log(data);
      this.applicationTotal = 0;
      this.rejectionTotal = 0;
      this.ghostedTotal = 0;
      this.selectionCount = 0;
      this.pendingCount = 0;
      //this.entries = data;
      let value = data.company;
      let value1 = data.position; 
      let value2 = data.date;
      console.log(data);
      //this.func();
      Object.keys(data).forEach(key => {

        //add one to the applied list
        this.applicationTotal += 1
        this.entries = data;
        //this.entries.push(key);
        //this.entries.push(data[key]);
        console.log(key);
        console.log(data[key]);
        console.log(this.entries[key]['company']);
        if (this.entries[key]['status'] == 'pending'){
          this.pendingCount += 1;
        }
        if (this.entries[key]['status'] == 'rejected'){
          this.rejectionTotal += 1;
        }
        if (this.entries[key]['status'] == 'ghosted'){
          this.ghostedTotal += 1;
        }
        if (this.entries[key]['status'] == 'selected'){
          this.selectionCount += 1;
        }
      })
      console.log("appliction count is " + this.applicationTotal);
      console.log("rejection count is " + this.rejectionTotal);
      console.log("ghosted count is " + this.ghostedTotal);
      console.log("Selection count is " + this.selectionCount);
      console.log("Pending count is " + this.pendingCount);
      
    }, err => {
      console.log('some err: ', err);
    });

  }

}
    )}



}