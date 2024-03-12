import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer2) {
    //console.log(this._elementRef);
    
    /*Evitar usar, vulnerável a ataques XXS.
    this._elementRef.nativeElement.style.backgroundColor = 'yellow';*/
    
    console.log(this._renderer);
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'backgroundColor',
      'yellow'
    );
   }

}
