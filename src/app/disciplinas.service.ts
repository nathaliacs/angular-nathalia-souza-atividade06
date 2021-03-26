import { Injectable } from '@angular/core';

interface Disciplina{
  title: string;
}

@Injectable()
export class DisciplinasService {

  // list: Array<Disciplina> = [];
  // disciplina: Array<string> = [
  //   'Negócios e Marketing e Eletrônicos',
  //   'Desenvolvimento para Servidores',
  //   'Inglês V ',
  //   'Projeto de Prototipagem e Testes de Usabilidade',
  //   'Desenvolvimento para Dispositivos Móveis I ',
  //   'Tópicos Especiais em Sistemas para Internet II',
  //   'Projeto de Trabalho de Graduação em Sistemas para Internet I '
  // ]
  list: Array<Disciplina> = [];

  constructor() {
   }

  getList(){
    return this.list;
  }
  add(title: string){
    this.list.push({title});

  }
  remove(index: number){
    this.list.splice(index, 1);
  }

}