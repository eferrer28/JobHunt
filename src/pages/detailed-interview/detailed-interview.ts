import { Observable } from 'rxjs/Observable';
import {  FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the DetailedInterviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailed-interview',
  templateUrl: 'detailed-interview.html',
})
export class DetailedInterviewPage {

  items: Observable<any[]>;
  
  id: string;
  stuff = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,    
     public FirebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
    this.FirebaseProvider.authState.subscribe(user => {
      if (user) {


    console.log('ionViewDidLoad JobstatusPage');
    this.id = this.navParams.get('param')
    console.log(this.id);
    this.items = this.navParams.get('param2')
    

    this.FirebaseProvider.getDetailedEntries(this.id).subscribe(data => {
      console.log(data);
      
      let value = data.company
      let value1 = data.position; 
      let value2 = data.date;
      this.stuff = data;
      console.log(this.stuff);
      
      
    }, err => {
      console.log('some err: ', err);
    });

  }

}

    )}

}
