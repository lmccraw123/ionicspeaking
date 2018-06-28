import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider} from '../../providers/user/user';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the ResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {

  user={}

  constructor(public navCtrl: NavController, public navParams: NavParams, private _user: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPage');
  }

  passwordReset(){
    this._user.reset(this.user)
    .subscribe((res:any) => {
      this.navCtrl.setRoot(LoginPage, {})
    },
    (err) => {
      this.navCtrl.setRoot(LoginPage, {})
    }
  )
    //once logged out sends the user back to the home page
    
    // clears all saved data in session storage
    }

}
