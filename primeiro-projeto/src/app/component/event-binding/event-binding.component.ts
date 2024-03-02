import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  botaoClicado(){
    alert('Fui clicado !')
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver =  !this.isMouseOver;
  }
}
