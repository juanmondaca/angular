import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './paginas/home/home.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { PaginaErrorComponent } from './shared/pagina-error/pagina-error.component';
import { CryptosComponent } from './paginas/test/cryptos.component';
import { CryptosRoutingModule } from './cryptos-routing.module';
import { MaterialModule } from './material/material.module';
import { CurrencycardComponent } from './componentes/currencycard/currencycard.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    PaginaErrorComponent,
    CryptosComponent,
    CurrencycardComponent
  ],
  imports: [
    CommonModule,
    CryptosRoutingModule,
    MaterialModule
  ]
})
export class CryptosModule { }
