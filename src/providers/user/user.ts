import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  //DRY below

  regURL: string = 'http://localhost:3000/api/appUsers';
  logURL: string = 'http://localhost:3000/api/appUsers/login';
  outURL: string = 'http://localhost:3000/api/appUsers/logout';
  
  data = {}
  
   register(user){
      return this.http.post(this.regURL, user)
   }
  
  login(login){
   return this.http.post(this.logURL, login)
  }

  out(account){
    return this.http.post(this.outURL, account)
  }

}
