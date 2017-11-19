import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobEntryPage } from './job-entry';

@NgModule({
  declarations: [
    JobEntryPage,
  ],
  imports: [
    IonicPageModule.forChild(JobEntryPage),
  ],
})
export class JobEntryPageModule {}

