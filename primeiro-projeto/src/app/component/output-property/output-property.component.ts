import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  //Também pode ser passado no decorator component
  //outputs: [mudouValor]
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @ViewChild('campoInput') campoValorInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  @Output() mudouValor = new EventEmitter();

  incrementa(){
    //Descobrindo o tipo do elemento e seus eventos no console com o viewchield
    console.log(this.campoValorInput.nativeElement.value);
    
    //alterando para o uso do viewChield
    //this.valor ++;
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor})
  }
  decrementa(){
    //this.valor --;
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor})
  }

}
