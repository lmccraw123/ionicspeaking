import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TextToSpeechPage } from '../pages/text-to-speech/text-to-speech';
import { SpeechToTextPage } from '../pages/speech-to-text/speech-to-text';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { AccountPage } from '../pages/account/account';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Globalization } from '@ionic-native/globalization';


import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TextToSpeechPage,
    SpeechToTextPage,
    LoginPage,
    RegistrationPage,
    AccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TextToSpeechPage,
    SpeechToTextPage,
    LoginPage,
    RegistrationPage,
    AccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    SpeechRecognition,
    Globalization,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ],
})
export class AppModule {}
