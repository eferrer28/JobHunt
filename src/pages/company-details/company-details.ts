import { FirebaseProvider } from './../../providers/firebase/firebase';
import { CompaniesProvider } from './../../providers/companies/companies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the CompanyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-details',
  templateUrl: 'company-details.html',
})
export class CompanyDetailsPage {

  companyData = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public cp: CompaniesProvider,
    public fb: FirebaseProvider) {
  }

  ionViewDidLoad() {
    this.fb.authState.subscribe(user => {
      if (user) {
        //this.entries = this.fb.getUserProfile();
         this.companyData = this.navParams.get('data');
         console.log(this.companyData);



        
        console.log("hi");

      } else {
        console.log('yikes');
        }
    })
  }

}

