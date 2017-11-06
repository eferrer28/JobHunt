import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RejectionModalPage } from './rejection-modal';

@NgModule({
  declarations: [
    RejectionModalPage,
  ],
  imports: [
    IonicPageModule.forChild(RejectionModalPage),
  ],
})
export class RejectionModalPageModule {}
