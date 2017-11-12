import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailedInterviewPage } from './detailed-interview';

@NgModule({
  declarations: [
    DetailedInterviewPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailedInterviewPage),
  ],
})
export class DetailedInterviewPageModule {}
