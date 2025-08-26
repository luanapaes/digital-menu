import { Injectable } from '@angular/core';
import { Prato } from '../interfaces/prato';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  pratosCarrinho: Prato[] = [];

  add(prato: Prato){
    this.pratosCarrinho.push(prato)
    return localStorage.setItem('pratos', JSON.stringify(this.pratosCarrinho))
  }

  get(){
    let arr = localStorage.getItem('pratos');

    if(arr){
      return JSON.parse(arr);
    } else {
      console.error("Erro ao recuperar array do localStorage");
      
    }
  }

  removePrato(pratoName: string) {
    let pratos: Prato[] | [] = JSON.parse(localStorage.getItem("pratos") || "[]");

    pratos = pratos.filter((prato: any) => prato.nome !== pratoName);

    localStorage.setItem("pratos", JSON.stringify(pratos));
  }
}
