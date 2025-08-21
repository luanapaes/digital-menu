import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prato-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './prato-card.component.html',
  styleUrl: './prato-card.component.scss'
})
export class PratoCardComponent {
  @Input() nome: string = '';
  @Input() descricao: string = '';
  @Input() preco: number = 0;
  @Input() pratoFoto: string = '';
  @Input() categoria: string = '';
}
