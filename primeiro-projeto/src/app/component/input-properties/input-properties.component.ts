import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-properties',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css']
})
export class InputPropertiesComponent implements OnInit {

  nomeDoCurso: string = 'Angular';
  
  valorInicial = 15;

  onMudouValor(evento){
    console.log(evento.novoValor);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
