import { CompaniesProvider } from './../../providers/companies/companies';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import firebase from 'firebase';
import { FirebaseProvider } from './../../providers/firebase/firebase';

/**
 * Generated class for the CompaniesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-companies',
  templateUrl: 'companies.html',
})
export class CompaniesPage {

  items: Observable<any[]>;
  companyData = [];

  constructor(public navCtrl: NavController, public fb: FirebaseProvider, public afd: AngularFireDatabase,
    public navParams: NavParams, public http: Http, public cp: CompaniesProvider)  {
  }


  ionViewDidLoad() {
    this.fb.authState.subscribe(user => {
      if (user) {
        //this.entries = this.fb.getUserProfile();
        
        this.items = this.fb.getCompanyList();
        console.log("hi");
        console.log(this.items);

      } else {
        this.items = null;
      }
    })
  }

  details(data){

    console.log(data);

    //console.log(this.http.get('http://api.glassdoor.com/api/api.htm?v=1&t.p=+++230193&t.k=fsjurF2o0B5&userip=0.0.0.0&useragent=&format=json&action=employers&q=' + data));
    //.map(res => res.json());
    this.cp.getJobData(data).subscribe(
      data => {this.companyData = data[0]
      console.log(data);
      console.log(JSON.stringify(this.companyData));
      this.navCtrl.push('CompanyDetailsPage', {'data': this.companyData});
    }
    )

  }
}
