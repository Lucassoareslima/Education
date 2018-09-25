import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IUsuario} from '../../interfaces/IUsuario';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {

url:string = 'http://localhost:3000/'

headers:any;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello UsuariosProvider Provider');
    // uso para o laravel ><
     // this.headers = {"header":{"authorization": "Bearer "+this.token}};

     storage.set('name', 'Lucas');

     storage.get('nome').then((val) => {
       if(val){
     console.log('Nome:', val);
   }else{
     console.log('Não exite:', val);
   }

 });

}

setStorage(chave,valor){
  this.storage.set(chave, valor);
}

getStorage(chave){
  return this.storage.get(chave);
}

  showUser(data:IUsuario){
    return this.http.get<IUsuario>(this.url +'Usuarios/'+data.id);
  }

  logUser(data:IUsuario){
    return this.http.get<IUsuario>(this.url +'Usuarios/1');
  }

  addUser(data:IUsuario){
  return this.http.post<IUsuario>(this.url +'Usuarios',data);
  }

  editUser(data:IUsuario){
    return this.http.put<IUsuario>(this.url +'Usuarios/'+data.id,data);
  }

}
