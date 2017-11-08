import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseProvider } from './../../providers/firebase/firebase';

/**
 * Generated class for the RejectionModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rejection-modal',
  templateUrl: 'rejection-modal.html',
})
export class RejectionModalPage {

  rejectionForm: FormGroup;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public fb: FormBuilder,  public FirebaseProvider: FirebaseProvider) {
      this.rejectionForm = this.fb.group({
        dateRejected: [null],
        notes: [null]
      });
    
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RejectionModalPage');
  }

  updateRejection(details){
    console.log('MEH');
    this.FirebaseProvider.updateRejection(details.dateRejected, details.notes, this.navParams.get('key'))
  }

}
