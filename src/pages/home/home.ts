import { JobstatusPage } from './../jobstatus/jobstatus';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any[]>;
  entries:[ Array<any>];
  //const items = this.afd.object('/userProfile/' + this.user.uid);
  item: FirebaseObjectObservable<any>;
  user: firebase.User;
  

  constructor(public navCtrl: NavController, public fb: FirebaseProvider, public afd: AngularFireDatabase) {
    
  }




  ionViewDidLoad() {
    this.fb.authState.subscribe(user => {
      if (user) {

        
        this.fb.getUserProfile().subscribe(data => {
          //console.log(data);
          this.entries = data;
          /*
          Object.keys(data).forEach(key => {
            this.entries = data;
            //this.entries.push(key);
            //this.entries.push(data[key]);
            console.log(key);
            console.log(data[key]);
            console.log(this.entries);

          });
          */
          console.log(this.entries);
          
          
        }, err => {
          console.log('some err: ', err);
        });
      }
    })
  }
  moreDetails(key, entries){
    console.log("HEY");
    //console.log(info);
    console.log(key);
    this.navCtrl.push(JobstatusPage, {param: key, param2: entries});
    
  }

  }




