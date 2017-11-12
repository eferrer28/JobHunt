import { DetailedInterviewPage } from './../detailed-interview/detailed-interview';
import { Observable } from 'rxjs/Observable';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-selected',
  templateUrl: 'selected.html',
})
export class SelectedPage {
  
    user: firebase.User;
   entries: Observable<any[]>;
  //entries:[ Array<any>];
    
  
    constructor(public navCtrl: NavController, public navParams: NavParams, 
      public fb: FirebaseProvider) {
    }
  
    ionViewDidLoad() {
      this.fb.authState.subscribe(user => {
        if (user) {
          
          this.entries = this.fb.getSelectedApps();
          console.log("hi");
          console.log(this.entries);
  
        } else {
          this.entries = null;
        }
      })
    }

    moreDetails(key, entries){
      console.log("HEY");
      //console.log(info);
      console.log(key);
      console.log(entries);
      
      this.navCtrl.push(DetailedInterviewPage, {param: key, param2: entries});
      
    } 
  
  }
  
