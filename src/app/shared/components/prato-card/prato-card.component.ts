import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AddToCartButtonComponent } from "../add-to-cart-button/add-to-cart-button.component";
import { Prato } from '../../interfaces/prato';

@Component({
  selector: 'app-prato-card',
  standalone: true,
  imports: [CurrencyPipe, AddToCartButtonComponent],
  templateUrl: './prato-card.component.html',
  styleUrl: './prato-card.component.scss'
})
export class PratoCardComponent {
  @Input() nome: string = '';
  @Input() descricao: string = '';
  @Input() preco: number = 0;
  @Input() pratoFoto: string = '';
  @Input() categoria: string = '';
  @Input() fullPrato!: Prato;
}
