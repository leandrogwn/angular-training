import { Injectable, EventEmitter } from "@angular/core";

import { LogService } from "src/app/shared/log.service";

@Injectable()
export class ServiceService {

  static emitirCursoCriado = new EventEmitter<string>();

  //Utilizando de forma static podemos definir a variável de forma global
  //não necessitando instancia-la, sendo assim basta chamar a classe e informar
  //o método que quer ouvir.
  private cursos: string[] = ['Angular', 'Java', 'Phonegap']

  constructor(private logService: LogService){
    console.log('Fui iniciado');
  }
  
  getCursos(){
    this.logService.consoleLog('Obtendo lista de cursos');
    return  this.cursos;
  }
  
  addCurso(curso: string){
    this.logService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);
    ServiceService.emitirCursoCriado.emit(curso);
  }
}
