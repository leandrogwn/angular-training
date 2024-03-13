import { Injectable } from "@angular/core";

@Injectable()
export class ServiceService {

  private cursos: string[] = ['Angular', 'Java', 'Phonegap']

  constructor(){
    console.log('Fui iniciado')
  }
  
  getCursos(){
    return  this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
  }
}
