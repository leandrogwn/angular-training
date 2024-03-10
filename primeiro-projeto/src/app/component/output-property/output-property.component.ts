import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  //Também pode ser passado no decorator component
  //outputs: [mudouValor]
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  constructor() { }

  ngOnInit() {
  }

  @Output() mudouValor = new EventEmitter();

  incrementa(){
    this.valor ++;
    this.mudouValor.emit({novoValor: this.valor})
  }
  decrementa(){
    this.valor --;
    this.mudouValor.emit({novoValor: this.valor})
  }

}
