import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { CurrencyFlag, rate } from '../models/data.model';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) {
    this.updateCurrenciesFromLocalStorage();
  }

  public getData(){
 return this.http
  .get<CurrencyFlag[]>('https://currencyexchange-wbtr.onrender.com/images')
  
}



public getrate(target:string){
  return this.http
  .get<rate>(`https://currencyexchange-wbtr.onrender.com/rates?baseCode=USD&targets=${target}`)
}
private currenciesSubject = new BehaviorSubject<CurrencyFlag[]>([]);
  currencies$: Observable<CurrencyFlag[]> = this.currenciesSubject.asObservable();



  updateCurrenciesFromLocalStorage() {
    const currencies = JSON.parse(localStorage.getItem('currencies') || '[]');
    this.currenciesSubject.next(currencies);
  }

}
