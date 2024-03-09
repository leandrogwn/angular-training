import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filtros } from './model/filtros';


@Component({
  selector: 'app-manipulacao-array',
  templateUrl: './manipulacao-array.component.html',
  styleUrls: ['./manipulacao-array.component.css']
})
export class ManipulacaoArrayComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  filtros: Filtros =  new Filtros();

  listaDeCoisas: any = [];

  getNomes(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/2').subscribe((response) => {
      this.listaDeCoisas = response;
      console.log(this.listaDeCoisas);

    })

  }
}
