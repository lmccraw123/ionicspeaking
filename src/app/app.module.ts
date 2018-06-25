import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TextToSpeechPage } from '../pages/text-to-speech/text-to-speech';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { AccountPage } from '../pages/account/account';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SMS } from '@ionic-native/sms';

import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TextToSpeechPage,
    LoginPage,
    RegistrationPage,
    AccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TextToSpeechPage,
    LoginPage,
    RegistrationPage,
    AccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ],
})
export class AppModule {}
