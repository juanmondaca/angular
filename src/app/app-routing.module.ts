import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginaErrorComponent } from './cryptos/shared/pagina-error/pagina-error.component';

const rutas: Routes = [
  {
    path:'cryptos',
    loadChildren: () => import('./cryptos/cryptos.module').then(m => m.CryptosModule)
  }
  ,
  {
    path: '404',
    component: PaginaErrorComponent
  },
  {
    path:'**',
    redirectTo: '404'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rutas),
    //CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
