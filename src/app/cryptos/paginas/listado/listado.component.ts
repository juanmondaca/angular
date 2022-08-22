import { Component, OnInit } from '@angular/core';
import { CryptocurrenciesService } from '../../servicios/cryptocurrencies.service';
import {ICryptoCurrency} from '../../interfaces/cryptoCurrency.interface'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  _listaCurrencies!: ICryptoCurrency[]

  // inyectar el servicio servicioCryptoCurrencies en el componente
  constructor(private servicioCryptoCurrencies: CryptocurrenciesService) { }

  ngOnInit(): void {
    console.log("ListadoComponent:ngOnInit :-> llamando al servicio servicioCryptoCurrencies")
    this.servicioCryptoCurrencies.getListadoCryptoCurrencies()
    .subscribe(
      (listaMonedas) => {
                        this._listaCurrencies = listaMonedas
                        console.log("Recibida la data de las currencies ! ", this._listaCurrencies)
                      },
      (error: any)   => {console.log("Hay un error ! " + error)}
      )
  }

  get listaCryptoCurrencies(): any{ //ICryptoCurrency[]
    return this._listaCurrencies; 
  }

}
