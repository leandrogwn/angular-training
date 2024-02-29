import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingEInterpolacaoComponent } from './component/property-binding-e-interpolacao/property-binding-e-interpolacao.component';
import { ClassEStyleBindingComponent } from './component/class-e-style-binding/class-e-style-binding.component';



@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingEInterpolacaoComponent,
    ClassEStyleBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
