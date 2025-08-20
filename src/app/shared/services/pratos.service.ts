import { Injectable } from '@angular/core';
import { Prato } from '../interfaces/prato';

@Injectable({
  providedIn: 'root'
})
export class PratosService {

  constructor() { }

  pratos: Prato[] = [
    {
      nome: "Cuscuz Recheado",
      descricao: "Cuscuz recheado com carne de sol, queijo e vinagrete",
      preco: 29.99,
      foto_prato: "https://www.deline.com.br/assets/images/recipes/cuscuz-recheado-de-frango/mobile/thumb-video.jpg?v3"
    },
    {
      nome: "Macarronada",
      descricao: "Cuscuz recheado com carne de sol, queijo e vinagrete",
      preco: 29.99,
      foto_prato: "https://www.deline.com.br/assets/images/recipes/cuscuz-recheado-de-frango/mobile/thumb-video.jpg?v3"
    },
    {
      nome: "Pudim",
      descricao: "Cuscuz recheado com carne de sol, queijo e vinagrete",
      preco: 29.99,
      foto_prato: "https://www.deline.com.br/assets/images/recipes/cuscuz-recheado-de-frango/mobile/thumb-video.jpg?v3"
    },
  ];

  getPratos() {
    return this.pratos;
  }

  findPrato(name: string) {
    if (name === '')return this.pratos;
    
    return this.pratos.filter(function (el) {
      return el.nome.toLowerCase().indexOf(name.toLowerCase()) > -1
    });
  }
}
