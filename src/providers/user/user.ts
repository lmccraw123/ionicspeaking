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
  logURL: string = '/login';
  outURL: string = '/logout?access_token=';
  accessToken: any ="";
  
  data = {}
  
   register(user){
      return this.http.post(this.regURL, user)
   }
  
  login(login){
   return this.http.post(this.regURL + this.logURL, login)
  }

  out(account){
    return this.http.post(this.regURL + this.outURL + this.accessToken, account)
  }

}
