import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Prato } from '../../interfaces/prato';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-add-to-cart-button',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart-button.component.html',
  styleUrl: './add-to-cart-button.component.scss'
})
export class AddToCartButtonComponent {
  @Input() prato!: Prato;

  cartService = inject(CartService);

  addToCart(){
    this.cartService.add(this.prato);
  }
}
