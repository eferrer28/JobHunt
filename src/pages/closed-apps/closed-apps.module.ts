import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClosedAppsPage } from './closed-apps';

@NgModule({
  declarations: [
    ClosedAppsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClosedAppsPage),
  ],
})
export class ClosedAppsPageModule {}
