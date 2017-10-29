import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';


/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  data: any;
  email: string = '';
  password: string = '';
  passwordRetyped: '';
  signupForm: FormGroup;
  loading: Loading;


  signupData = {
    email: '',
    password: '',
    passwordRetyped: ''
  };

  constructor(private navCtrl: NavController, private navParams: NavParams, 
    private alertCtrl: AlertController, private afAuth: AngularFireAuth,
    private fb: FormBuilder, private FirebaseProvider: FirebaseProvider,
    private loadingCtrl: LoadingController) {

    this.signupForm = fb.group({
      email: '',
      password: '',
      passwordRetyped: ''
    });

    

    this.signupData.email = this.navParams.get('email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
 
  signup(data) {
    if(data.password !== data.passwordRetyped) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Your password and your re-entered password does not match each other.',
	buttons: ['OK']
      });
      alert.present();
      return;
    }
    // Firebase Signup Code
    this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
    .then(auth => {
      // Could do something with the Auth-Response
      console.log(auth);
    })
    .catch(err => {
      // Handle error
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
    });








  }
}




