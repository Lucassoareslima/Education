import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import {IUsuario} from '../../interfaces/IUsuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';


/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

usuario:IUsuario = {name:'',email:'',senha:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuProv: UsuariosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  Cancelar(){
    this.navCtrl.setRoot(HomePage);
  }

  addUser(){
    this.usuProv.addUser(this.usuario).subscribe(res =>{
      console.log(res);
    }, erro => {
      console.log("Erro" + erro.mensage);
  });
  }

}
