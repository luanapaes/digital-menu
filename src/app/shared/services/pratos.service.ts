import { Injectable } from '@angular/core';
import { Prato } from '../interfaces/prato';

@Injectable({
  providedIn: 'root'
})
export class PratosService {

  constructor() { }

  pratos: Prato[] = [
    // Café da Manhã
    {
      nome: "Cuscuz Recheado",
      descricao: "Cuscuz recheado com carne de sol, queijo e vinagrete",
      preco: 29.99,
      foto_prato: "https://www.deline.com.br/assets/images/recipes/cuscuz-recheado-de-frango/mobile/thumb-video.jpg?v3",
      categoria: "Café da Manhã"
    },
    {
      nome: "Omelete com Queijo",
      descricao: "Omelete de ovos com queijo coalho derretido",
      preco: 14.90,
      foto_prato: "https://www.deline.com.br/assets/images/recipes/cuscuz-recheado-de-frango/mobile/thumb-video.jpg?v3",
      categoria: "Café da Manhã"
    },
    {
      nome: "Tapioca com Coco",
      descricao: "Tapioca recheada com coco fresco e leite condensado",
      preco: 12.00,
      foto_prato: "https://www.deline.com.br/assets/images/recipes/cuscuz-recheado-de-frango/mobile/thumb-video.jpg?v3",
      categoria: "Café da Manhã"
    },
    {
      nome: "Pão na Chapa",
      descricao: "Pão francês na chapa com manteiga",
      preco: 6.00,
      foto_prato: "https://www.deline.com.br/assets/images/recipes/cuscuz-recheado-de-frango/mobile/thumb-video.jpg?v3",
      categoria: "Café da Manhã"
    },

    // Almoço
    {
      nome: "Macarronada",
      descricao: "Macarronada com molho de tomate e carne moída",
      preco: 29.99,
      foto_prato: "https://www.deline.com.br/assets/images/recipes/cuscuz-recheado-de-frango/mobile/thumb-video.jpg?v3",
      categoria: "Almoço"
    },
    {
      nome: "Feijoada",
      descricao: "Feijoada completa com arroz, farofa e couve",
      preco: 34.90,
      foto_prato: "https://www.deline.com.br/assets/images/recipes/cuscuz-recheado-de-frango/mobile/thumb-video.jpg?v3",
      categoria: "Almoço"
    },
    {
      nome: "Peixe Frito com Pirão",
      descricao: "Filé de peixe frito com pirão e arroz",
      preco: 32.00,
      foto_prato: "https://www.deline.com.br/assets/images/recipes/cuscuz-recheado-de-frango/mobile/thumb-video.jpg?v3",
      categoria: "Almoço"
    },
    {
      nome: "Bife à Parmegiana",
      descricao: "Bife empanado com molho de tomate e queijo derretido, acompanhado de arroz e batata",
      preco: 36.50,
      foto_prato: "https://www.deline.com.br/assets/images/recipes/cuscuz-recheado-de-frango/mobile/thumb-video.jpg?v3",
      categoria: "Almoço"
    },

    // Sobremesa
    {
      nome: "Pudim",
      descricao: "Pudim de leite condensado com calda de caramelo",
      preco: 9.99,
      foto_prato: "https://www.deline.com.br/assets/images/recipes/cuscuz-recheado-de-frango/mobile/thumb-video.jpg?v3",
      categoria: "Sobremesa"
    },
    {
      nome: "Bolo de Cenoura",
      descricao: "Bolo de cenoura com cobertura de chocolate",
      preco: 7.50,
      foto_prato: "https://www.deline.com.br/assets/images/recipes/cuscuz-recheado-de-frango/mobile/thumb-video.jpg?v3",
      categoria: "Sobremesa"
    },
    {
      nome: "Mousse de Maracujá",
      descricao: "Mousse cremosa de maracujá com calda",
      preco: 8.00,
      foto_prato: "https://www.deline.com.br/assets/images/recipes/cuscuz-recheado-de-frango/mobile/thumb-video.jpg?v3",
      categoria: "Sobremesa"
    },
    {
      nome: "Brigadeiro Gourmet",
      descricao: "Brigadeiro de chocolate belga com granulado belga",
      preco: 3.50,
      foto_prato: "https://www.deline.com.br/assets/images/recipes/cuscuz-recheado-de-frango/mobile/thumb-video.jpg?v3",
      categoria: "Sobremesa"
    }
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

  getByCategory(category: string){
    if(category === 'tudo'){
      return this.pratos;
    }
    return this.pratos.filter((p) => p.categoria === category);
  }
}
