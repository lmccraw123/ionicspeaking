import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider} from '../../providers/user/user';
import { NavController } from 'ionic-angular';
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
    // get your user.token
    // let noMore = sessionStorage.getItem('token')
    // console.log('token')
    this.navCtrl.push(HomePage, {})
    // clears all saved data in session storage
    .then(() => sessionStorage.clear())
        }
    

}
