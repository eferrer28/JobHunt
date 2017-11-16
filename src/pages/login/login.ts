import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  data: any;
  loginForm: FormGroup;
  email: string = '';
  password: string = '';



  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth,
            private toastCtrl: ToastController, private fb: FormBuilder) { 

              this.loginForm = fb.group({
                email: '',
                password: '',
                
              });  
            }
 


  login(data) {
    // Login Code here
    this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password)
    .then(auth => {
      //per side menu and tabs navigation
      //this.navCtrl.setRoot('MenuPage');
      //this.navCtrl.setRoot(MenuPage);
      
      // Do custom things with auth
    })
    .catch(err => {
      // Handle error
      let toast = this.toastCtrl.create({
        message: err.message,
        duration: 1000
      });
      toast.present();
    });
  }
 
  signup() {
    this.navCtrl.push(RegisterPage);
  }
}
