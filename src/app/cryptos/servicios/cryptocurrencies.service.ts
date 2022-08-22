import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICryptoAcronimo } from '../interfaces/cryptoAcronimo.interface';
import { ICryptoCurrency } from '../interfaces/cryptoCurrency.interface';

@Injectable({
  providedIn: 'root'
})
export class CryptocurrenciesService {

  uriBase: string = "http://localhost:8083"
  // inyectar el servicio de webapi cryptos
  constructor(private clienteHttp: HttpClient) { }

  // obtiene un listado de todas las cryptos desde 
  // la api http://ejemplo-cryptomonedas.herokuapp.com/api/lcm
  getListadoCryptoCurrencies(): Observable<ICryptoCurrency[]>{
    console.log("Enviando solicitud a la API /lcm")
    return this.clienteHttp.get<ICryptoCurrency[]>(this.uriBase + '/api/listaCryptos')
  }

  getListadoCryptoAcronimos(): Observable<ICryptoAcronimo[]>{
    console.log("Enviando solicitud a la API /la")
    return this.clienteHttp.get<ICryptoCurrency[]>(this.uriBase + '/api/listaAcronimos')
  }

}
