import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  submitRegister(){
    console.log(this.user)
    this._user.register(this.user)
      .subscribe( res => {
          console.log(res)
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('userId', res.userId);
          this._router.navigate(['home']);
        }
      )
  }
}
