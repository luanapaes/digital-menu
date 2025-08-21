import { Component, inject, Input } from '@angular/core';
import { Prato } from '../../interfaces/prato';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddPratoMessageSnackbarComponent } from '../add-prato-message-snackbar/add-prato-message-snackbar.component';
@Component({
  selector: 'app-add-to-cart-button',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart-button.component.html',
  styleUrl: './add-to-cart-button.component.scss'
})
export class AddToCartButtonComponent {
  constructor(private _snackBar: MatSnackBar) { }
  
  @Input() prato!: Prato;

  cartService = inject(CartService);

  addToCart(){
    this.cartService.add(this.prato);
    
    this._snackBar.openFromComponent(AddPratoMessageSnackbarComponent, {
      duration: 2 * 1000,
      data: this.prato.nome
    });
  }
}
