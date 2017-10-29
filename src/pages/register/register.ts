import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


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


  signupData = {
    email: '',
    password: '',
    passwordRetyped: ''
  };

  constructor(private navCtrl: NavController, private navParams: NavParams, 
    private alertCtrl: AlertController, private afAuth: AngularFireAuth) {
    this.signupData.email = this.navParams.get('email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
 
  signup() {
    if(this.signupData.password !== this.signupData.passwordRetyped) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Your password and your re-entered password does not match each other.',
	buttons: ['OK']
      });
      alert.present();
      return;
    }
    // Firebase Signup Code
    this.afAuth.auth.createUserWithEmailAndPassword(this.signupData.email, this.signupData.password)
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




