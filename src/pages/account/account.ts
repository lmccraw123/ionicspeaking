import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider} from '../../providers/user/user';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  user = {};

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private _user: UserProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  logOut(){
    console.log(this.user)
    this._user.out(this.user)
        .subscribe( res => {
            sessionStorage.setItem('token', res.token);
            sessionStorage.setItem('userId', res.userId);
            this.navCtrl.push(HomePage, {
              });
          })
        }

}
