import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ICurso} from '../../interfaces/ICurso';

/*
  Generated class for the EducationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EducationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EducationProvider Provider');

}

allTeste(){
return this.http.get<ICurso[]>('http://localhost:3000/Cursos');
}

addTeste(data:ICurso){
return this.http.post<ICurso>('http://localhost:3000/Cursos',data);
}

editTeste(data:ICurso){
return this.http.put<ICurso>('http://localhost:3000/Cursos'+data.id,data);
}

deletTeste(data:ICurso){
return this.http.delete<ICurso>('http://localhost:3000/Cursos'+data.id);
}

  all(){
    const lista: ICurso[] = [
      {
        "id":1,
        "titulo":"Programção Java",
        "descricao":"Venha aprender a programar em Java",
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
    }
    ];

      return lista;

  }

}
