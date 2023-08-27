import { Component } from '@angular/core';
import { CardsListStaticData } from './models/data.static';
import { CurrencyCardModel } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gradProject';
  showFav = false;
  // call API and pass data
  staticCardsList = CardsListStaticData;

  testFavChanges(card: CurrencyCardModel) {
    console.log(card);
  }
}
