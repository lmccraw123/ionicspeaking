import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { RegistrationPage } from '../../pages/registration/registration';
import { ResetPage } from '../../pages/reset/reset';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;


  constructor(public navCtrl: NavController) {

  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  doRegister(event, item) {
    this.navCtrl.setRoot(RegistrationPage, {
    });
      }

  loginSubmit(event, item) {
    this.navCtrl.setRoot(LoginPage, {
    });
      }

resetPassword(){
  this.navCtrl.setRoot(ResetPage, {
  });
}

}
