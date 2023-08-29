import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurrencyCardModel, CurrencyFlag } from '../models/data.model';
import { ServiceService } from '../shared/service.service';
@Component({
  selector: 'app-favourits',
  templateUrl: './favourits.component.html',
  styleUrls: ['./favourits.component.css'],
})
export class FavouritsComponent {
  @Input() cardsList!: CurrencyFlag[];
  @Output() closeFav = new EventEmitter<boolean>();
  @Output() checkedItemChanges = new EventEmitter<CurrencyFlag[]>();

  checkedItem: CurrencyFlag[] = [];
  toggleFav(card: CurrencyFlag, cards: CurrencyFlag[]) {
    card.checked = !card.checked;
    this.checkboxChanged(cards);
  }
  constructor(private service: ServiceService) {}

  

  @Output() checkedCurrenciesChange = new EventEmitter<string[]>();
  checkboxChanged(cardList: CurrencyFlag[]) {
    this.checkedItem = this.checkedItem.filter((favCard) =>
      cardList.some(
        (card) => card.currency === favCard.currency && card.checked
      )
    );
    console.log(cardList);
    console.log(this.cardsList);
    cardList.forEach((card) => {
      if (card.checked) {
        if (!this.checkedItem.find((item) => item.currency === card.currency)) {
          this.checkedItem.push(card);
        }
      }
    });
    console.log(cardList);
    console.log(this.cardsList);
    localStorage.setItem('currencies', JSON.stringify(this.checkedItem));
    this.checkedItemChanges.emit(this.checkedItem);

    console.log(this.checkedItem);
  }
}
