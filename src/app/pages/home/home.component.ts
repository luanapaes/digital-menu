import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { CategoryButtonComponent } from '../../shared/components/category-button/category-button.component';
import { SearchFieldComponent } from '../../shared/components/search-field/search-field.component';
import { Prato } from '../../shared/interfaces/prato';
import { PratosService } from '../../shared/services/pratos.service';
import { PratoCardComponent } from "../../shared/components/prato-card/prato-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent,
    CategoryButtonComponent, SearchFieldComponent,
    PratoCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  categories = [
    "Tudo", "Café da Manhã", "Almoço", "Sobremesa", "Jantar"
  ];

  pratosService = inject(PratosService);

  pratos: Prato[] = [];
  pratosFiltrados: Prato[] = [];
  pratosExibidos: Prato[] = [];

  filter:string = '';

  filterCategoria!: string;


  ngOnInit(): void {
    this.pratos = this.pratosService.getPratos();
    this.pratosExibidos = this.pratos;
  }

  onSearch(value: string) {
    this.filter = value;
    this.pratosExibidos = this.getPratosExibidos();
  }

  getPratosExibidos() {
    // primeiro filtra por categoria
    let categoriaFiltrada = this.filterCategoria
      ? this.pratosService.getByCategory(this.filterCategoria)
      : this.pratos;

    // depois filtra pelo nome
    return categoriaFiltrada.filter(prato =>
      prato.nome.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  getPratosPorCategoria(categoria: string) {
    this.filterCategoria = categoria;
    this.pratosExibidos = this.getPratosExibidos();
  }
}
