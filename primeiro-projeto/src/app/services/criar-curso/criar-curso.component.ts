import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../cursos/service.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  //Ao usar o provider dentro do decorator do component teremos duas instâncias do serviço
  //dessa forma podemos limitar os componentes a ter acesso ao serviço.
  providers: [ServiceService]
})
export class CriarCursoComponent implements OnInit {

  curso: string[] = [];

  constructor(private _serviceService: ServiceService) { }

  ngOnInit() {
    this.curso = this._serviceService.getCursos();
  }

  onAddCurso(curso: string){
    this._serviceService.addCurso(curso);
  }
}
