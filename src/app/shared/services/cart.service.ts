import { Injectable } from '@angular/core';
import { Prato } from '../interfaces/prato';
import { CustomPrato } from '../interfaces/custom-prato';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  pratosCarrinho: CustomPrato[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  private loadFromLocalStorage() {
    const arr = localStorage.getItem('pratos');
    this.pratosCarrinho = arr ? JSON.parse(arr) : [];
  }

  private saveToLocalStorage() {
    localStorage.setItem('pratos', JSON.stringify(this.pratosCarrinho));
  }

  add(prato: CustomPrato) {
    this.pratosCarrinho.push(prato);
    this.saveToLocalStorage();
  }

  get(): CustomPrato[] {
    this.loadFromLocalStorage();
    return this.pratosCarrinho;
  }

  removePrato(pratoName: string) {
    this.pratosCarrinho = this.pratosCarrinho.filter(p => p.nome !== pratoName);
    this.saveToLocalStorage();
  }

  //verifica se o prato já existe no carrinho para aumentar a quantidade ou adicionalo
  verifyPrato(prato: CustomPrato) {
    const existingPrato = this.pratosCarrinho.find(p => p.nome === prato.nome);

    if (existingPrato && existingPrato.qtdPedido !== undefined) {
      existingPrato.qtdPedido++;
    } else {
      const newPrato: CustomPrato = { ...prato, qtdPedido: prato.qtdPedido ?? 1 };
      this.add(newPrato);
    }
    this.saveToLocalStorage();
  }
}
