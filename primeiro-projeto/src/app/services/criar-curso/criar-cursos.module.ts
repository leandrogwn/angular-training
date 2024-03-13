import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
;
import { ServiceService } from '../cursos/service.service';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [
    CriarCursoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CriarCursoComponent
  ],
  //providers: [ServiceService]
})
export class CriarCursosModule { }
