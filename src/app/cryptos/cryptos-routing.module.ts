import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { ListaAcronimosComponent } from './paginas/lista-acronimos/lista-acronimos.component';

const rutas: Routes = [
  {
    path:'',
    // componente padre
    component: HomeComponent,
    // rutas hijas
    children:[
      // {
      //   path:'home',
      //   component:HomeComponent
      // },
      {
        path:'listado',
        component: ListadoComponent
      }
      ,
      {
        path:'listaacronimos',
        component: ListaAcronimosComponent
      },
      {
        path:'**',
        redirectTo: 'listado'
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class CryptosRoutingModule { }
