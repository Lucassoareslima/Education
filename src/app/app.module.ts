import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { AulaPage } from '../pages/aula/aula';
import {CadastroPage} from '../pages/cadastro/cadastro';
import {PerfilPage} from '../pages/perfil/perfil';
import {LoginPage} from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { EducationProvider } from '../providers/education/education';
import { UsuariosProvider } from '../providers/usuarios/usuarios';

import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetalhePage,
    AulaPage,
    CadastroPage,
    PerfilPage,
    LoginPage,

  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetalhePage,
    AulaPage,
    CadastroPage,
    PerfilPage,
    LoginPage,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EducationProvider,
    UsuariosProvider
  ]
})
export class AppModule {}
