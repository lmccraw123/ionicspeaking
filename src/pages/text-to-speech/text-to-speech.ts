import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SMS } from '@ionic-native/sms';


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
 
  options = {
    //voice control was a range from 0-1 native
    range: undefined,
    //text entered in home.html input field
    text: undefined,
    //phone number entered in home.html input field
    phone: undefined
     }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private tts: TextToSpeech,
    private sms: SMS
      ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextToSpeechPage');
  }

  onText(){
    //voice control
    this.options.range = this.options.range/100
    //places phone number is field on phones sms app and applies text in input field
    this.sms.send(this.options.phone, this.options.text);
    console.log(this.options);
    //native speech for getting text to voice to work
    this.tts.speak(this.options)
    //clears text and phone input fields
    .then(() => this.options.text="")
    .then(() => this.options.phone="")
    //error handeling native 
    .catch((reason: any) => console.log(reason));
    }


}
