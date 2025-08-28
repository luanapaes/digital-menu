import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { CategoryButtonComponent } from '../../shared/components/category-button/category-button.component';
import { SearchFieldComponent } from '../../shared/components/search-field/search-field.component';
import { Prato } from '../../shared/interfaces/prato';
import { PratosService } from '../../shared/services/pratos.service';
import { PratoCardComponent } from "../../shared/components/prato-card/prato-card.component";
import { AboutUsComponent } from '../../shared/components/about-us/about-us.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent,
    CategoryButtonComponent, SearchFieldComponent,
    PratoCardComponent, AboutUsComponent, FooterComponent],
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

  // paginação
  currentPage: number = 1;
  itemsPerPage: number = 12; // quantidade de pratos por página
  totalPages: number = 1;

  ngOnInit(): void {
    this.pratos = this.pratosService.getPratos();
    this.atualizarLista();
  }

  onSearch(value: string) {
    this.filter = value;
    this.currentPage = 1;
    this.atualizarLista();
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
    this.currentPage = 1;
    this.atualizarLista();
  }

  atualizarLista() {
    const filtrados = this.getPratosExibidos();
    this.totalPages = Math.ceil(filtrados.length / this.itemsPerPage);

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    this.pratosExibidos = filtrados.slice(start, end);
  }

  mudarPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPages) {
      this.currentPage = pagina;
      this.atualizarLista();
    }
  }
}
