import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingEInterpolacaoComponent } from './component/property-binding-e-interpolacao/property-binding-e-interpolacao.component';
import { ClassEStyleBindingComponent } from './component/class-e-style-binding/class-e-style-binding.component';
import { EventBindingComponent } from './component/event-binding/event-binding.component';
import { ManipulacaoArrayComponent } from './component/manipulacao-array/manipulacao-array.component';
import { HttpClientModule } from '@angular/common/http';
import { TwoWayDataBindingComponent } from './component/two-way-data-binding/two-way-data-binding.component';
import { InputPropertiesComponent } from './component/input-properties/input-properties.component';
import { MeuCursoComponent } from './component/meu-curso/meu-curso.component';
import { OutputPropertyComponent } from './component/output-property/output-property.component';
import { CicloComponent } from './component/ciclo/ciclo.component';
import { DiretivaNgifComponent } from './component/diretivas/diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './component/diretivas/diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './component/diretivas/diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './component/diretivas/diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './component/diretivas/diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './component/diretivas/operador-elvis/operador-elvis.component';
import { ExemploNgcontentComponent } from './component/diretivas/exemplo-ngcontent/exemplo-ngcontent.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './component/diretivas/diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { CriarCursosModule } from './services/criar-curso/criar-cursos.module'
import { CursosModule } from './services/cursos/cursos.module';
import { ServiceService } from './services/cursos/service.service';
import { LogService } from './shared/log.service';
import { ExemplosPipesComponent } from './pipes/exemplos-pipes/exemplos-pipes.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingEInterpolacaoComponent,
    ClassEStyleBindingComponent,
    EventBindingComponent,
    ManipulacaoArrayComponent,
    TwoWayDataBindingComponent,
    InputPropertiesComponent,
    MeuCursoComponent,
    OutputPropertyComponent,
    CicloComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    ExemploNgcontentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    ExemplosPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CursosModule,
    CriarCursosModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent],
  //providers: [ServiceService]
})
export class AppModule { }
