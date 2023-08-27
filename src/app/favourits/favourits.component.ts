import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyCardModel } from '../models/data.model';

@Component({
  selector: 'app-favourits',
  templateUrl: './favourits.component.html',
  styleUrls: ['./favourits.component.css'],
})
export class FavouritsComponent {
  @Input() cardsList: CurrencyCardModel[] = [];
  @Output() closeFav = new EventEmitter<boolean>();
  @Output() favItemChanges = new EventEmitter<CurrencyCardModel>();

  toggleFav(card: CurrencyCardModel) {
    card.checked = !card.checked;
    this.favItemChanges.emit(card);
  }
}
