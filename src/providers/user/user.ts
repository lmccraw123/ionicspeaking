import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';

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

  regURL: string = 'https://lauren-spring-2018-phortonssf.c9users.io:8080/api/appUsers';
  logURL: string = 'https://lauren-spring-2018-phortonssf.c9users.io:8080/api/appUsers/login';
  
  data = {}
  
   register(user){
    return this.http.post(this.regURL, user)
  }
  
  login(login){
   return this.http.post(this.logURL, login)
  }

}
