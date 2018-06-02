import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterviewOverviewPage } from './interview-overview';

@NgModule({
  declarations: [
    InterviewOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(InterviewOverviewPage),
  ],
})
export class InterviewOverviewPageModule {}
