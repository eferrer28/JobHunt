import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CompaniesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CompaniesProvider {

  apiID: '230193';
  apiKey: 'fsjurF2o0B5';
  

  constructor(public http: HttpClient) {
    console.log('Hello CompaniesProvider Provider');
  }

}
