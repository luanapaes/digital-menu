import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { CategoryButtonComponent } from '../../shared/components/category-button/category-button.component';
import { SearchFieldComponent } from '../../shared/components/search-field/search-field.component';

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
}
