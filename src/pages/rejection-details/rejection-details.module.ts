import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RejectionDetailsPage } from './rejection-details';

@NgModule({
  declarations: [
    RejectionDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RejectionDetailsPage),
  ],
})
export class RejectionDetailsPageModule {}
