import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-e-interpolacao',
  templateUrl: './property-binding-e-interpolacao.component.html',
  styleUrls: ['./property-binding-e-interpolacao.component.css']
})
export class PropertyBindingEInterpolacaoComponent{

  url:string = 'http://www.google.com.br';
  cursoAngular:boolean = true;
  urlImagem = 'http://lorempixel.com.br/400/200/';

  getValor(){
    return 1;
  }

  getCursoAngular(){
    return true;
  }
}
