import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase,  FirebaseObjectObservable} from 'angularfire2/database';


/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public userProfile; any;
  public birthDate: string;
  nameForm: FormGroup;
  name: string;
  post: any;
  
  item: FirebaseObjectObservable<any>;
  


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
    public alertCtrl: AlertController, public fb: FirebaseProvider, public afd: AngularFireDatabase) {
    this.nameForm = formBuilder.group({
    fname: ['', null],
    lname: ['', null],
    email: ['', null]

    });

    this.item = this.afd.object('/userProfile/');
    console.log("HELLO! " + this.item);
  }

  ionViewDidLoad() {
    this.fb.authState.subscribe(user => {
      if (user) {
        this.fb.getUserProfile().subscribe(data => {
          let value = data.firstName
          let value1 = data.lastName; 
          let value2 = data.dob;
          let value3 = data.email;
          this.nameForm.patchValue({fname: value});
          this.nameForm.patchValue({lname: value1});
          this.nameForm.patchValue({email: value3});
          
        }, err => {
          console.log('some err: ', err);
        });
      }
    })
  }


 updateUser(post){
   console.log(post.fname);
   console.log(post.lname);
   this.fb.updateDetails(post.fname, post.lname, post.email);
 }


  /*

  updateName(): void {
    const alert: Alert = this.alertCtrl.create({
      message: "Your first name & last name",
      inputs: [
        {
          name: "firstName",
          placeholder: "YOur First Name",
          value: this.userProfile.firstName
        },
        {
          name: "lastName",
          placeholder: "Your last name",
          value: this.userProfile.lastName
        }
      ],
      buttons: [
        { text: "Cancel" },
        {
          text: "Save",
          handler: data => {
            this.profileProvider.updateName(data.firstName,data.lastName);
          }
        }
      ]
    });
    alert.present();
  }
  */
}
