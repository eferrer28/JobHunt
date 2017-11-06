import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobstatusPage');
    this.id = this.navParams.get('param')
    console.log(this.id);
    console.log(this.navParams.get('param1'));
  }

}

