import { Component, Router } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, private _router: Router, private _user: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin(){
    console.log(this.user)
    this._user.login(this.user)
        .subscribe( res => {
            console.log(res,any)
            sessionStorage.setItem('token', res.token);
            sessionStorage.setItem('userId', res.userId);
            this._router.navigate(['home']);
          })

}
