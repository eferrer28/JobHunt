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

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FirebaseProvider) {
  }

  ionViewDidLoad() {
    this.fb.authState.subscribe(user => {
      if (user) {


    console.log('ionViewDidLoad JobstatusPage');

    

    this.fb.getStats().subscribe(data => {
      console.log(data);
      
      this.entries = data;
      let value = data.company;
      let value1 = data.position; 
      let value2 = data.date;
      console.log(this.entries);
      this.func();
      
      
    }, err => {
      console.log('some err: ', err);
    });

  }

}
    )}

    func(){
      this.entries.reduce(function(sums,entry){
        sums[entry.status] = (sums[entry.status] || 0) + 1;
        console.log(sums);
        return sums;
    },{});

}

}