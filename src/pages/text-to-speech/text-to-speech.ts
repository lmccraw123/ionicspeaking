import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { isUndefined } from 'ionic-angular/umd/util/util';


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
  //gets value from user input 
  options = {
    range: undefined,
    text: undefined
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private tts: TextToSpeech
      ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextToSpeechPage');
  }

  onText(){
    console.log(this.options);
    this.tts.speak(this.options)
    .then(() => this.options.text="")
    .catch((reason: any) => console.log(reason));
    }

}
