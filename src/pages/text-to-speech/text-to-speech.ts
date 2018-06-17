import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Globalization } from '@ionic-native/globalization';

/**
 * Generated class for the TextToSpeechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text-to-speech',
  templateUrl: 'text-to-speech.html',
})
export class TextToSpeechPage {

  text:string;
  language:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private tts: TextToSpeech,
    private globalization: Globalization
      ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextToSpeechPage');
  }

  onText(){
    this.tts.speak(this.text)
    .then(() => this.text="")
    .catch((reason: any) => console.log(reason));
    }

  getPreferredLanguage(){
    this.globalization.getPreferredLanguage()
    .then(res => console.log(res))
    .catch(e => console.log(e));
  }
}
