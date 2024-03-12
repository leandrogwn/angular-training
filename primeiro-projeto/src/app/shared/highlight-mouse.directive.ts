import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  //Forma não elegante de alterar elementos html comentadas
  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
      );*/
      this.backgroundColor='yellow'
    }
    
    //Hostlistner fica escutando evento no hospedereiro da diretiva
    @HostListener('mouseleave') onMouseLeave(){
    /* this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'white'
      );*/
      this.backgroundColor='white'
  }

  //Hostbinding permite que façamos a associação de um atributo ou classe do html para uma variável. 
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer2
    ) { }

}
