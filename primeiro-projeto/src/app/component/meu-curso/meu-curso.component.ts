import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-curso',
  templateUrl: './meu-curso.component.html',
  styleUrls: ['./meu-curso.component.css'],
  //inputs: ['nomeCurso:nome']
})
export class MeuCursoComponent implements OnInit {

  //Casso deseje usar a variável interna com nome diferente da externa basta passar a externa dentro do input
  //Também pode ser passado como metadado do decorator component.
  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}
