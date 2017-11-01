import { ProfileProvider } from './../../providers/profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public profileProvider: ProfileProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.profileProvider.getUserProfile().on("value", userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      this.birthDate = userProfileSnapshot.val().birthDate;
    });
  }

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

}
