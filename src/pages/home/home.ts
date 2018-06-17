import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { RegistrationPage } from '../../pages/registration/registration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  doRegister(event, item) {
    this.navCtrl.push(RegistrationPage, {
      item: item
    });
      }

  loginSubmit(event, item) {
    this.navCtrl.push(LoginPage, {
      item: item
    });
      }



}
