import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { flagCountry } from '../data/data.module';
import { compare } from './interfaces/compare.model';


@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  getCurrencyData() {
    return this.http.get<flagCountry[]>(`https://currencyexchange-wbtr.onrender.com/images`);
    
  }
  
  getcompareRate(basecurrancy:string , targetOne:string , targetTwo:string , amount:number){
    return this.http.get<compare>(`https://currencyexchange-wbtr.onrender.com/compare/${basecurrancy}/${targetOne}/${targetTwo}/${ amount}`);

  };
}

