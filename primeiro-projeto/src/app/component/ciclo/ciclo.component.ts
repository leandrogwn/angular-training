import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  @Input() valorInicial: number = 10;

  constructor() { 
    this.log('construtor');
  }
  
  ngOnchanges(){
    this.log('ngOnChanges');
  }
  
  ngOnInit() {
    this.log('ngOnInit');
  }


  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }
  
  ngAfterContentViewChecked(){
    this.log('ngAfterContentViewChecked');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook: string){
    console.log(hook);
  }

}
