import { Component, inject, Inject } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { CategoryButtonComponent } from '../../shared/components/category-button/category-button.component';
import { SearchFieldComponent } from '../../shared/components/search-field/search-field.component';
import { Prato } from '../../shared/interfaces/prato';
import { PratosService } from '../../shared/services/pratos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, 
    CategoryButtonComponent, SearchFieldComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  categories = [
    "Café da Manhã", "Almoço", "Salada", "Sobremesa", 
    "Pizza", "Hambúrguer", "Massa",
    "Pizza", "Hambúrguer", "Massa",
  ];

  pratosService = inject(PratosService);

  pratos: Prato[] = [];
  pratosFiltrados: Prato[] = [];

  ngOnInit(): void {
    this.getPratos();
    this.pratosFiltrados = this.getPratosFiltrados("");
  }


  getPratosFiltrados(nomeProduto: string){
    return this.pratosService.findPrato(nomeProduto);
  }

  getPratos(){
    return this.pratos = this.pratosService.getPratos();
  }
}
