import { FirebaseProvider } from './../../providers/firebase/firebase';
import { CreateEntryProvider } from './../../providers/create-entry/create-entry';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  post: any;
  user: FormGroup;
  company:string = '';
  position:string = '';
  //pending: boolean = true;
  status: string = '';
  pending: string;
  startDate = new Date().toISOString();


  constructor(public navCtrl: NavController, public navParams: NavParams,
            private fb: FormBuilder, public entryProvider: CreateEntryProvider,
            public firebaseProvider: FirebaseProvider  ) {
    this.user = this.fb.group({

      company: [null, [Validators.required,  Validators.minLength(5),Validators.maxLength(30
      )]],
      position: [null, [Validators.required,  Validators.minLength(5),Validators.maxLength(16)]],
      date: ['']
    });
  }

  entryOne(post){
    this.company = post.company;
    this.position = post.position
    console.log(post.company);
    console.log(post.position);
    console.log(post.date);

  }

  newEntry(post): void{


    //this.entryProvider.createEntry(post.company, post.position, post.date, "pending").then(
      this.firebaseProvider.createNewEntry(post.company, post.position, post.date, "pending").then(
        
      newEvent => {
        //this.navCtrl.pop();
        this.navCtrl.setRoot('HomePage');

      });
    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobEntryPage');
  }

}

