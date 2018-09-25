import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetalhePage}  from '../detalhe/detalhe';
import {ICurso} from '../../interfaces/ICurso';
import { EducationProvider } from '../../providers/education/education';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

lista: ICurso[];


  constructor(public navCtrl: NavController, public prov: EducationProvider) {

  //this.lista = this.prov.all();

}

  ionViewDidEnter(){
    this.prov.allTeste().subscribe(res =>{
        this.lista = res;
    }, erro => {
      console.log("erro" + erro.mensage);
  });

/*  let data:ICurso = {
    "id":5,
    "titulo":"Curso Test!",
    "descricao":"Venha aprender a fazer teste",
    "valor":29.99,
    "valor_txt":"29.99",
    "img":"http://pluspng.com/img-png/java-png-java-june-1-2014-public-728.png",
    "aulas": [
      {
        "id":10,
        "ordem":1,
        "titulo":"Introdução ao Curso",
        "tempo":"05:00",
        "video":"https://www.youtube.com/embed/LnORjqZUMIQ",
      },
        {
      "id":10,
      "ordem":2,
      "titulo":"primeira aplicação",
      "tempo":"16:00",
      "video":"https://www.youtube.com/embed/LnORjqZUMIQ",
        }
  ],
};*/

/*TESTE DE ADICIONAR ITEM!*/

  // this.prov.addTeste(data).subscribe(res =>{
  //     console.log(res);
  // }, erro => {
  //   console.log("erro" + erro.mensage);
  // });

///-----------------------------------///

/*editando posts.*-/

  this.prov.editTeste(data).subscribe(res =>{
      console.log(res);
  }, erro => {
    console.log("erro" + erro.mensage);
  });
}

//-----------------------------------///

/*deletando posts.*-/


this.prov.deletTeste(data).subscribe(res =>{
    console.log(res);
}, erro => {
  console.log("erro" + erro.mensage);
});
*/

}


  abreDetalhe(item){
    this.navCtrl.push(DetalhePage,{dados:item});

  }
}
