import { ClosedAppsPage } from './../pages/closed-apps/closed-apps';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JobEntryPage } from '../pages/job-entry/job-entry';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LogoutPage } from './../pages/logout/logout';
import { ProfilePage } from './../pages/profile/profile';
import { JobstatusPage } from './../pages/jobstatus/jobstatus'
import { GhostedModalPage } from './../pages/ghosted-modal/ghosted-modal';
import { RejectionModalPage } from './../pages/rejection-modal/rejection-modal';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpModule } from '@angular/http';



import { ReactiveFormsModule } from '@angular/forms'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { CreateEntryProvider } from '../providers/create-entry/create-entry';

import { DerpPipe } from './/../pipes/derp/derp'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyClS1FWGGzpydAj3ApjiKhB7_YiyeSA7kM",
    authDomain: "jobhunt-6615c.firebaseapp.com",
    databaseURL: "https://jobhunt-6615c.firebaseio.com",
    projectId: "jobhunt-6615c",
    storageBucket: "jobhunt-6615c.appspot.com",
    messagingSenderId: "658825804697"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    JobEntryPage,
    LoginPage,
    RegisterPage,
    LogoutPage,
    ProfilePage,
    JobstatusPage,
    DerpPipe,
    GhostedModalPage,
    RejectionModalPage,
    ClosedAppsPage

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    JobEntryPage,
    LoginPage,
    RegisterPage,
    LogoutPage,
    ProfilePage,
    JobstatusPage,
    GhostedModalPage,
    RejectionModalPage,
    ClosedAppsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    CreateEntryProvider
  ]
})
export class AppModule {}
