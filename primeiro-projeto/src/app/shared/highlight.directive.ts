import { Directive,HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
      this.backgroundColor=this.highlightColor;
    }
    
    //Hostlistner fica escutando evento no hospedereiro da diretiva
    @HostListener('mouseleave') onMouseLeave(){
      this.backgroundColor=this.defaultColor;
  }

  //Hostbinding permite que façamos a associação de um atributo ou classe do html para uma variável. 
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input('appHighlight') highlightColor: string = 'yellow';


  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
 
}
