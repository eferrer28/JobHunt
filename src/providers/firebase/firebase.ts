import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/


@Injectable()
export class FirebaseProvider {

  

  user: firebase.User;
  authState: Observable<firebase.User>;
  count = 0;

  constructor(public http: Http, private afAuth: AngularFireAuth,
    public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
    this.authState = afAuth.authState;
    
        this.authState.subscribe(user => {
          this.user = user;
        });
  }
 
  logoutUser(){
    return this.afAuth.auth.signOut();
  }

  createNewEntry(companyEntry, positionEntry, dateEntry, statusEntry){
    return this.afd.list('/userProfile/' + this.user.uid + '/applications/').push({
      company: companyEntry,
      position: positionEntry,
      date: dateEntry,
      status: statusEntry

    });
  }

  getDetailedEntries(key){
    console.log(key);
    return this.afd.object('/userProfile/' + this.user.uid + '/applications/' + '/' + key);
    
  }

  register(email, password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      newUser => {
        this.afd.list('/userProfile').update(newUser.uid, {email: email})
      }
    )
  }

  getUserProfile() {

    console.log("poop");
    return this.afd.object('/userProfile/' + this.user.uid);
    
  }

  getHomePage() {
    
        //console.log("lololol");
        //return this.afd.object('/userProfile/' + this.user.uid + '/applications/');
        return this.afd.list('/userProfile/' + this.user.uid + '/applications/',  {
          query: {
            orderByChild: 'status',
            equalTo: 'pending'
    
    
          }
        });
      }

  updateDetails(first, second) {
    return this.afd.object('/userProfile/' + this.user.uid).update({firstName: first, lastName: second} );
  }

  testing(first){
    return this.afd.object('/userProfile/' + this.user.uid + '/' + first).update({company: first} );
    
  }

  updateRejection(rejectionDate, rejectionNotes, key){
    return this.afd.object('/userProfile/' + this.user.uid + '/applications/' + '/' + key).update({dateRejected: rejectionDate, 
    notes: rejectionNotes, status: 'rejected'} );
    
  } 
 
  addInterview(key, type, date, stage, notes){

    this.count++
    
    return this.afd.list('/userProfile/' + this.user.uid +  '/applications/' + key).push({round: this.count, 
      interviewType: type, interviewDate: date, interviewNotes: notes} );
  }

  //add new name after this.user.uid... something like /entries/

  getClosedApps(){
    console.log(this.user.uid);
    return this.afd.list('/userProfile/' + this.user.uid + '/applications/',  {
      query: {
        orderByChild: 'status',
        equalTo: 'rejected'


      }
    });
    
  }
   

}
