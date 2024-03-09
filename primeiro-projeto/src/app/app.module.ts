import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingEInterpolacaoComponent } from './component/property-binding-e-interpolacao/property-binding-e-interpolacao.component';
import { ClassEStyleBindingComponent } from './component/class-e-style-binding/class-e-style-binding.component';
import { EventBindingComponent } from './component/event-binding/event-binding.component';
import { ManipulacaoArrayComponent } from './component/manipulacao-array/manipulacao-array.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingEInterpolacaoComponent,
    ClassEStyleBindingComponent,
    EventBindingComponent,
    ManipulacaoArrayComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
