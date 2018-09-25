import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import {IUsuario} from '../../interfaces/IUsuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario:IUsuario = {name:'',email:'',senha:''};

    constructor(public navCtrl: NavController, public navParams: NavParams, public usuProv: UsuariosProvider) {
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad CadastroPage');
    }

    Cancelar(){
      this.navCtrl.setRoot(HomePage);
    }

    logUser(){
        this.usuProv.logUser(this.usuario).subscribe(res =>{
          this.usuProv.setStorage("usuario", res);
        console.log(res);
      }, erro => {
        console.log("Erro" + erro.mensage);
    });
    }

}
