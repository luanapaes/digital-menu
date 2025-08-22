import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public dialog: MatDialog, public breakpointObserver: BreakpointObserver) { } 

  openCart(){
    const isMobile = this.breakpointObserver.isMatched('(max-width: 600px)');

    this.dialog.open(CartComponent, {
      width: isMobile ? '90%' : '400px'
    });
  }
}
