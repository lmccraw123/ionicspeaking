import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider} from '../../providers/user/user';
import { TextToSpeechPage } from '../../pages/text-to-speech/text-to-speech';

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

  user={};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _user: UserProvider
      ) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  submitRegister(){
    console.log(this.user)
    this._user.register(this.user)
      .subscribe( (res:any) => {
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('userId', res.userId);
          this.navCtrl.setRoot(TextToSpeechPage, {
            
            });
        }
      )
  }
}
