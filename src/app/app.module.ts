import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { JobEntryPage } from '../pages/job-entry/job-entry';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';



import { ReactiveFormsModule } from '@angular/forms'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    ListPage,
    JobEntryPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    JobEntryPage,
    LoginPage,
    RegisterPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
