import { GhostedModalPage } from './../ghosted-modal/ghosted-modal';
import { RejectionModalPage } from './../rejection-modal/rejection-modal';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController  } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';



@IonicPage()
@Component({
  selector: 'page-jobstatus',
  templateUrl: 'jobstatus.html',
})
export class JobstatusPage {

  items: Observable<any[]>;
  
  id: string;
  someObj: object;
  smallerObj: object;
  jobstatusForm: FormGroup;
  isChecked = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
  public FirebaseProvider: FirebaseProvider, public modalCtrl: ModalController, 
  public alertCtrl: AlertController, 
  public toastCtrl: ToastController) {
    this.jobstatusForm = formBuilder.group({
      company: ['', null],
      position: ['', null],
      date: ['', null],
      selected: [false, null],
      rejected: [false, null],
      ghosted: [false, null],
      pending: [, null],
      interviewType: ['', null],
      stage: ['', null],
      interviewDate: ['', null],
      notes: ['', null]
      
    });
    }

  ionViewDidLoad() {
    this.FirebaseProvider.authState.subscribe(user => {
      if (user) {


    console.log('ionViewDidLoad JobstatusPage');
    this.id = this.navParams.get('param')
    console.log(this.id);
    this.items = this.navParams.get('param2')
    

    this.FirebaseProvider.getDetailedEntries(this.id).subscribe(data => {
      console.log(data);
      let value = data.company
      let value1 = data.position; 
      let value2 = data.date;
      this.jobstatusForm.patchValue({company: value});
      this.jobstatusForm.patchValue({position: value1});
      this.jobstatusForm.patchValue({date: value2});
      
      
    }, err => {
      console.log('some err: ', err);
    });

  }

}

    )}

  update(){
    console.log('new state:' + this.isChecked)
  }

  

  rejected(){
    let rejectionModal = this.modalCtrl.create(RejectionModalPage, {key: this.id});
    rejectionModal.present();
  }

  ghosted(){
    console.log("da fuck");
    let prompt = this.alertCtrl.create({
      title: 'Details',
      inputs: [
        {
          name: 'name',
          placeholder: 'Ghosted Notes',
          type: 'text'
        },
        {
          name: "date",
          placeholder: "Enter the date ghosted",
          type: 'date'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Update Status',
          handler: data => {
            this.FirebaseProvider.updateGhosted(data.name, data.date, this.id).then(data => {
              this.presentToast('Status Updated!');
            });
          }
        }
      ]
    });
    prompt.present();

  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  updateInterview(data){
    this.FirebaseProvider.addInterview(this.id, data.interviewType, data.interviewDate, data.notes);
    
  }

}
