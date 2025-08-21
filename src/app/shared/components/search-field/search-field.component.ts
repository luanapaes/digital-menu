import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss'
})
export class SearchFieldComponent {
  @Output() termoPesquisado = new EventEmitter<string>();

  onSearch(event: Event){
    let termo = event.target as HTMLInputElement;
    this.termoPesquisado.emit(termo.value);
  }
}
