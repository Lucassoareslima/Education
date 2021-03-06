import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import {IUsuario} from '../../interfaces/IUsuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  usuario:IUsuario = {name:'',email:'',senha:''};

    constructor(public navCtrl: NavController, public navParams: NavParams, public usuProv: UsuariosProvider) {
    }

    ionViewDidLoad() {
      let usuario = {
        "name": "lucas",
        "email": "Lucas@gmail.com",
        "senha": "26041995",
        "id": 1
      };

      this.usuProv.editUser(usuario).subscribe(res =>{
        this.usuario = res;
      }, erro => {
        console.log("Erro" + erro.mensage);
    });

    }

    cancelar(){
      this.navCtrl.setRoot(HomePage);
    }

    editUser(){
      this.usuProv.editUser(this.usuario).subscribe(res =>{
        this.usuario = res;
      }, erro => {
        console.log("Erro" + erro.mensage);
    });
    }
}
