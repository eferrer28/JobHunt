import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the JobEntryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-entry',
  templateUrl: 'job-entry.html',
})

export class JobEntryPage {

  user: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
            private fb: FormBuilder ) {

    this.user = this.fb.group({
      company: ['assholes'],
      position: ['stripper'],
      date: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobEntryPage');
  }

}
