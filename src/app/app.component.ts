import { ChangeDetectorRef, Component, Output } from '@angular/core';
import { CardsListStaticData } from './models/data.static';
import { CurrencyCardModel, CurrencyFlag } from './models/data.model';
import {ServiceService} from "./shared/service.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gradProject'
 showFav = false;
  Currencies:CurrencyFlag[]=[];
  // call API and pass data
  staticCardsList = CardsListStaticData;
  testFavChanges(Currencies:CurrencyFlag[]){
    this.Currencies = Currencies;
    this.cardsList = this.cardsList.map((e,i)=>{
      let found = Currencies.find(d=>d.currency == e.currency);
      console.log(found)
      if(found){
        return found
      }  // USD
      else return e;
    })


    console.log(Currencies, this.cardsList);
  }
  cardsList: CurrencyFlag[] = [];
  // call API and pass data
  constructor(private service :ServiceService ){}

  ngOnInit() :void{
    this.service.getData().subscribe(respons=>{
      this.cardsList = respons;
      console.log(this.cardsList)
      })}
}
