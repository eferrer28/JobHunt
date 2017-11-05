import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingLists: Observable<any[]>;
  entries: Array<any>;
  //const items = this.afd.object('/userProfile/' + this.user.uid);
  item: FirebaseObjectObservable<any>;
  

  constructor(public navCtrl: NavController, public fb: FirebaseProvider, public afd: AngularFireDatabase) {
    //this.afd.object('/userProfile/' + this.user.uid);
    
  }




  ionViewDidLoad() {
    this.fb.authState.subscribe(user => {
      if (user) {
        this.fb.getUserProfile().subscribe(data => {
          console.log(data);
          this.entries = data;
          
          
        }, err => {
          console.log('some err: ', err);
        });
      }
    })
  }
  }




