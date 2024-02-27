import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingEInterpolacaoComponent } from './component/property-binding-e-interpolacao/property-binding-e-interpolacao.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingEInterpolacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
