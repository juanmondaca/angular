import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css']
})
export class CryptosComponent implements OnInit {

  // propiedades
  // temporalmente los valores son directos  ... despues deben ser
  // extraidos desde un servicio webapi
  name:string                   = 'Bitcoin'
  acronym:string                = 'BTC'
  price_USD:string              = '24,565'
  changeLast24Hours:string      = '2.30'
  marketCap_USD:string          = '469.388'
  volumenLast24Hours_USD:string = ''
  updateDate:string             = '2022-07-30 10:00:20'

  constructor() { }

  ngOnInit(): void {
  }

  // getters
  get nameCrypto(){
    return this.name
  }

  get acronymCrypto(){
    return this.acronym
  }

  get price_USDCrypto(){
    return this.price_USD
  }

  get changeLast24HoursCrypto(){
    return this.changeLast24Hours
  }

  get marketCap_USDCrypto(){
    return this.marketCap_USD
  }

  get volumenLast24Hours_USDCrypto(){
    return this.volumenLast24Hours_USD
  }

  get updateDateCrypto(){
    return this.updateDate
  }


}
