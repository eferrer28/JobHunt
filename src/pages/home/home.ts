import { DetailedInterviewPage } from './../detailed-interview/detailed-interview';
import { JobstatusPage } from './../jobstatus/jobstatus';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component} from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import { PopoverController } from 'ionic-angular';

import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any[]>;
  entries:[ Array<any>];
  item: FirebaseObjectObservable<any>;
  user: firebase.User;
  pendingEntries: Observable<any[]>;

  selectedEntries: Observable<any[]>;
  closedEntries: Observable<any[]>;
  applications: string = 'open';
  
  

  constructor(public navCtrl: NavController, public fb: FirebaseProvider, public afd: AngularFireDatabase,
    public navParams: NavParams, public popoverCtrl: PopoverController) {
    console.log(this.navParams.get('page'));    
  }

  ionViewDidLoad() {
    this.fb.authState.subscribe(user => {
      if (user) {
        //this.entries = this.fb.getUserProfile();
        
        this.items = this.fb.getHomePage();
        this.pendingEntries = this.fb.getPendingApps();
        console.log("hi");
        console.log(this.items);
        this.selectedEntries = this.fb.getSelectedApps();
        this.closedEntries = this.fb.getClosedApps();       

      } else {
        this.items = null;
      }
    })
  }




  moreDetails(key, entries){
    console.log("HEY");
    //console.log(info);
    console.log(key);
    console.log(entries);
    
    this.navCtrl.push(JobstatusPage, {param: key, param2: entries});
    
  }

  moreSelectedDetails(key, entries){
    console.log("HEY");
    //console.log(info);
    console.log(key);
    console.log(entries);
    
    this.navCtrl.push(DetailedInterviewPage, {param: key, param2: entries});
    
  }

  moreClosedDetails(key, entries){
    console.log("HEY");
    //console.log(info);
    console.log(key);
    console.log(entries);
    
    this.navCtrl.push(DetailedInterviewPage, {param: key, param2: entries});
    
  }

  removeItem(id) {
    this.fb.removeItem(id);
  }

  }




