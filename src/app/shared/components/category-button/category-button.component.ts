import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-button',
  standalone: true,
  imports: [],
  templateUrl: './category-button.component.html',
  styleUrl: './category-button.component.scss'
})
export class CategoryButtonComponent {
  @Input() nameCategory: string = '';
}

