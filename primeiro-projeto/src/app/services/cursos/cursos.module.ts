import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
;
import { ServiceService } from './service.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent
  ],
  providers: [ServiceService]
})
export class CursosModule { }
