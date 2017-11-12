import { Observable } from 'rxjs/Observable';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
  /**
 * Generated class for the ClosedAppsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-closed-apps',
  templateUrl: 'closed-apps.html',
})
export class ClosedAppsPage {

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
        
        this.entries = this.fb.getClosedApps();
        console.log("hi");
        console.log(this.entries);

      } else {
        this.entries = null;
      }
    })
  }

}
