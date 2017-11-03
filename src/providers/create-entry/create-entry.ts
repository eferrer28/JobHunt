import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';
import 'rxjs/add/operator/map';

/*
  Generated class for the CreateEntryProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CreateEntryProvider {

  public entryRef: firebase.database.Reference;
  constructor(public http: Http, private afd: AngularFireDatabase) {
    console.log('Hello CreateEntryProvider Provider');
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.entryRef = firebase.database().ref(`/userProfile/${user.uid}`);
    }
  });
  }

    createEntry(companyEntry: string, positionEntry: string, dateEntry: string, statusEntry: string): 
    firebase.database.ThenableReference{
      return this.entryRef.push({
        company: companyEntry,
        position: positionEntry,
        date: dateEntry,
        status: statusEntry

      });
    }
    getEntry(): firebase.database.Reference{
      return this.entryRef;
    }

    getEntryDetails(entryId: string): firebase.database.Reference {
      return this.entryRef.child(entryId);
    }
    }

