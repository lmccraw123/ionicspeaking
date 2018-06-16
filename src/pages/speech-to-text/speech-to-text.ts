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
  templateUrl: 'speech-to-text.html',
})
export class SpeechToTextPage {

  options:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private speechRecognition: SpeechRecognition) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeechToTextPage');
  }

  // Check feature available
  featureAvailable(){
this.speechRecognition.isRecognitionAvailable()
.then((available: boolean) => console.log(available))
  }

// Start the recognition process
  recognitionProcess(){
this.speechRecognition.startListening(options)
.subscribe(
  (matches: Array<string>) => console.log(matches),
  (onerror) => console.log('error:', onerror)
)
  }

// Stop the recognition process (iOS only)
  stopRecognition(){
this.speechRecognition.stopListening()
  }

// Get the list of supported languages
  supportedLanguages(){
this.speechRecognition.getSupportedLanguages()
.then(
  (languages: Array<string>) => console.log(languages),
  (error) => console.log(error)
)
  }

// Check permission
  checkPermission(){
this.speechRecognition.hasPermission()
.then((hasPermission: boolean) => console.log(hasPermission))
  }

// Request permissions
  requestPermissions(){
this.speechRecognition.requestPermission()
.then(
  () => console.log('Granted'),
  () => console.log('Denied')
)
  }
  
}
