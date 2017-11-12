import { Observable } from 'rxjs/Observable';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the SelectedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

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
          //this.entries = this.fb.getUserProfile();
          
          this.entries = this.fb.getSelectedApps();
          console.log("hi");
          console.log(this.entries);
  
        } else {
          this.entries = null;
        }
      })
    }
  
  }
  
