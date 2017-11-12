import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class FirebaseProvider {

  user: firebase.User;
  authState: Observable<firebase.User>;

  //Global count is used to keep track of current stage of interiew
  count = 0;

  constructor(public http: Http, private afAuth: AngularFireAuth,
    public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
    this.authState = afAuth.authState;
    
        this.authState.subscribe(user => {
          this.user = user;
        });
  }

  register(email, password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      newUser => {
        this.afd.list('/userProfile').update(newUser.uid, {email: email})
      }
    )
  }
 
  logoutUser(){
    return this.afAuth.auth.signOut();
  }

  getUserProfile() {
    
    console.log("poop");
    return this.afd.object('/userProfile/' + this.user.uid);
        
  }

  updateDetails(first, second) {
    return this.afd.object('/userProfile/' + this.user.uid).update({firstName: first, lastName: second} );
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

  getDetailedInterview(key){
    console.log(key);
    return this.afd.object('/userProfile/' + this.user.uid + '/applications/' + '/' + key);
    
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

  updateRejection(rejectionDate, rejectionNotes, key){
    return this.afd.object('/userProfile/' + this.user.uid + '/applications/' + '/' + key).update({dateRejected: rejectionDate, 
    notes: rejectionNotes, status: 'rejected'} );
    
  } 

  updateGhosted(ghostedDate, ghostedNotes, key){
    return this.afd.object('/userProfile/' + this.user.uid + '/applications/' + '/' + key).update({dateRejected: ghostedDate, 
    notes: ghostedNotes, status: 'ghosted'} );
    
  } 
  
  addInterview(key, type, date, notes){

    this.updateInterviewStatus(key);

    this.count++
    
    return this.afd.list('/userProfile/' + this.user.uid +  '/applications/' + key).push({round: this.count, 
      interviewType: type, interviewDate: date, interviewNotes: notes} );
  }

  updateInterviewStatus(key){
    return this.afd.object('/userProfile/' + this.user.uid + '/applications/' + '/' + key).update({ status: 'selected'} );
  }

  //add new name after this.user.uid... something like /entries/
  getSelectedApps(){
    console.log(this.user.uid);
    return this.afd.list('/userProfile/' + this.user.uid + '/applications/',  {
      query: {
        orderByChild: 'status',
        equalTo: 'selected'
      }
    });
    
  }

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
