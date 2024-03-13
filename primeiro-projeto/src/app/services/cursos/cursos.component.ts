import { Component, OnInit } from '@angular/core';

import { ServiceService } from './service.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  serviceServices: ServiceService;

  constructor(private _serviceServices: ServiceService) {    
    //this.serviceServices = new ServiceService();
    this.serviceServices = _serviceServices;
   }

  ngOnInit() {
    this.cursos = this.serviceServices.getCursos();
  }

}
