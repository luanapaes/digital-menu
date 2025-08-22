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
    "Café da Manhã", "Almoço", "Salada", "Sobremesa", 
    "Pizza", "Hambúrguer", "Massa",
    "Pizza", "Hambúrguer", "Massa",
  ];

  pratosService = inject(PratosService);

  pratos: Prato[] = [];
  pratosFiltrados: Prato[] = [];

  filter:string = '';

  ngOnInit(): void {
    this.getPratos(); //alimenta array para exibilo
  }

  ngDoCheck(): void {// sempre que o valor do filter muda a função é chamada
    this.pratosFiltrados = this.getPratosFiltrados(this.filter);
  }

  getPratosFiltrados(nomeProduto: string){
    return this.pratosService.findPrato(nomeProduto);
  }

  getPratos(){
    return this.pratos = this.pratosService.getPratos();
  }

  //recebe valor do componente pai e alimenta a var filter
  onSearch(value: string) {
    this.filter = value;
  }
}
