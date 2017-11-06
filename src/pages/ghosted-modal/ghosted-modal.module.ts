import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GhostedModalPage } from './ghosted-modal';

@NgModule({
  declarations: [
    GhostedModalPage,
  ],
  imports: [
    IonicPageModule.forChild(GhostedModalPage),
  ],
})
export class GhostedModalPageModule {}
