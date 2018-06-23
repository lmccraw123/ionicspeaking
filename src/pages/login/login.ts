import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider} from '../../providers/user/user';
import { TextToSpeechPage } from '../../pages/text-to-speech/text-to-speech';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private _user: UserProvider
    
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin(){
    console.log(this.user)
    this._user.login(this.user)
        .subscribe( res => {
            sessionStorage.setItem('token', res.token);
            sessionStorage.setItem('userId', res.userId);
            this.navCtrl.push(TextToSpeechPage, {
              });
          })
        }
}
