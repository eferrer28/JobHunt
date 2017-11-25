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

  companyData = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public cp: CompaniesProvider,
    public fb: FirebaseProvider) {
  }

  ionViewDidLoad() {
    this.fb.authState.subscribe(user => {
      if (user) {
        //this.entries = this.fb.getUserProfile();
        
        this.cp.getJobData(this.navParams.get('data')).subscribe(
          data => {this.companyData = data
          console.log(data);
          console.log(JSON.stringify(this.companyData));
          //this.navCtrl.push('CompanyDetailsPage', data);
        }
        )

 

      } else {
      }

    });

}
}
