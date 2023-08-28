import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyCardModel, CurrencyFlag } from 'src/app/models/data.model';

@Component({
  selector: 'app-rate-card',
  templateUrl: './rate-card.component.html',
  styleUrls: ['./rate-card.component.css'],
})
export class RateCardComponent {
  @Input() cardData!: CurrencyFlag;
  

}

