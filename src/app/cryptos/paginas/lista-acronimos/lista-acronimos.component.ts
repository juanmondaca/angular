import { Component, OnInit } from '@angular/core';
import { ICryptoAcronimo } from '../../interfaces/cryptoAcronimo.interface';
import { CryptocurrenciesService } from '../../servicios/cryptocurrencies.service';

@Component({
  selector: 'app-lista-acronimos',
  templateUrl: './lista-acronimos.component.html'
})
export class ListaAcronimosComponent implements OnInit {

  private _listaAcronimos: ICryptoAcronimo[] = []
  constructor(private cryptoService: CryptocurrenciesService) { }

  ngOnInit(): void {
    this.cryptoService.getListadoCryptoAcronimos().subscribe(
      datos => this._listaAcronimos = datos
    )
  }

  get listaAcronimos():any{
    return this._listaAcronimos;
  }

}
