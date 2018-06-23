import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

/**
 * Generated class for the SpeechToTextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-speech-to-text',
  templateUrl: 'speech-to-text.html'
})
export class SpeechToTextPage {

  options: SpeechRecognition;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private speechRecognition: SpeechRecognition
    ) 
      {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeechToTextPage');
  }

  listening(){
    this.speechRecognition.isRecognitionAvailable().then(result => {
      result ? this.startListening() : alert('Speech is Not avilable');
    }, error => {
      console.error(error);
    })
  }

  startListening(){
    this.speechRecognition.startListening().then(() => {
    }, error => {
      console.error(error);
    })
    
  }

  stopListening() {
    this.speechRecognition.stopListening().then(() => {
      console.log("stopped")
    }, error => {
      console.error(error);
    }
    )}
  
}
