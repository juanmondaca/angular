import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './cryptos/paginas/home/home.component';
import { CryptosComponent } from './cryptos/paginas/test/cryptos.component';
import {HttpClientModule} from '@angular/common/http';
//import { ListaAcronimosComponent } from './cryptos/paginas/lista-acronimos/lista-acronimos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    //ListaAcronimosComponent,
   //HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
