import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpeechKit } from '@ionic-native/speechkit';

/**
 * Generated class for the SpeechToTextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-speech-to-text',
  templateUrl: 'speech-to-text.html',
})
export class SpeechToTextPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private speechkit: SpeechKit) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeechToTextPage');
  }

  onSpeak(){
  this.speechkit.tts('Text to be read out loud', 'ENG-GBR').then(
    (msg) => { console.log(msg); },
    (err) => { console.log(err); }
  );
    }

}
