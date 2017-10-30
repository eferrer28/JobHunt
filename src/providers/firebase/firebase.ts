import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public http: Http, private afAuth: AngularFireAuth) {
    console.log('Hello FirebaseProvider Provider');
  }

  logoutUser(){
    return this.afAuth.auth.signOut();
  }

}
