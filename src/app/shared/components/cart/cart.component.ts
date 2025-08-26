import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../services/cart.service';
import { Prato } from '../../interfaces/prato';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatButtonModule, MatDialogContent, MatDialogActions, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService = inject(CartService);
  pratosArray: Prato[] = [];
  total: number = 0

  constructor(public dialog: MatDialog) { } 
  
  ngOnInit(): void {
    this.loadPratos();
    this.calcularTotal();
  }
  
  loadPratos(){
    this.pratosArray = this.cartService.get();
  }

  closeCarrinho(){
    this.dialog.closeAll();
  }

  calcularTotal(){
    this.total = this.pratosArray.reduce((ac, n) => ac += n.preco, 0)
  }

  atualizarCarrinho(){
    this.loadPratos();
    this.calcularTotal();
  }

  remove(nomePrato: string){
    this.cartService.removePrato(nomePrato);
    this.atualizarCarrinho();
  }
}
