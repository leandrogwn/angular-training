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
    CicloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
