import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the JobstatusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jobstatus',
  templateUrl: 'jobstatus.html',
})
export class JobstatusPage {

  id: string;
  someObj: object;
  smallerObj: object;
  jobstatusForm: FormGroup;
  isChecked = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
  public FirebaseProvider: FirebaseProvider) {
    this.jobstatusForm = formBuilder.group({
      company: ['', null],
      position: ['', null],
      date: ['', null],
      selected: [false, null],
      rejected: [false, null],
      ghosted: [false, null],
      pending: ['', null],
      interviewType: ['', null],
      stage: ['', null],
      interviewDate: ['', null]
    });
    }

  ionViewDidLoad() {
    this.FirebaseProvider.authState.subscribe(user => {
      if (user) {


    console.log('ionViewDidLoad JobstatusPage');
    this.id = this.navParams.get('param')
    console.log(this.id);
    //console.log(this.navParams.get('param2'));
    this.someObj = this.navParams.get('param2')
    console.log(this.someObj[this.id]);
    this.smallerObj = this.someObj[this.id];
    console.log(this.smallerObj['company']);
    this.jobstatusForm.patchValue({company: this.smallerObj['company']});
    this.jobstatusForm.patchValue({position: this.smallerObj['position']});
    this.jobstatusForm.patchValue({date: this.smallerObj['date']});
    
  }

}

    )}

  update(){
    console.log('new state:' + this.isChecked)
  }
}
