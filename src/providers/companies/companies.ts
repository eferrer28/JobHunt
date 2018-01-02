import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the CompaniesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CompaniesProvider {

  apiID: '+++230193';
  apiKey: 'fsjurF2o0B5';
  userAgent = window.navigator.userAgent;
  
  

  constructor(public http: Http) {
    console.log('Hello CompaniesProvider Provider');
    //return this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients='+ str +'&limitLicense=false&number='+ lengthOf +'&ranking=1', opt).map(res => res.json())
    //console.log(this.http.get('http://api.glassdoor.com/api/api.htm?v=1&t.p=+++230193&t.k=fsjurF2o0B5&userip=0.0.0.0&useragent=&format=json&action=employers&q=' + data));
    
  }

  getJobData(data){

    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;
    //myHeaders.append('X-Mashape-Key', 'KMFbmMJvR5mshlzIpvvR6AEKR5TGp1ISCRJjsnd550UPefSzse');
    myHeaders.append('Content-type', 'application/json');
    opt = new RequestOptions({
    headers: myHeaders
    })
    return this.http.get(`http://api.glassdoor.com/api/api.htm?v=1&t.p=230193&t.k=fsjurF2o0B5&userip=0.0.0.0&useragent=` + this.userAgent + `&format=json&action=employers&q=` + data, opt).map(res => res.json().response.employers)
    
  }

}
