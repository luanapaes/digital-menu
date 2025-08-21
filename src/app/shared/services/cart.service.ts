import { Injectable } from '@angular/core';
import { Prato } from '../interfaces/prato';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  pratosCarrinho: Prato[] = [];

  add(prato: Prato){
    this.pratosCarrinho.push(prato)
    return localStorage.setItem('pratos', JSON.stringify(this.pratosCarrinho))
  }

  get(){
    return localStorage.getItem('pratos')
  }
}
