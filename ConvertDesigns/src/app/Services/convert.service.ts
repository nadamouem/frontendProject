import { HttpClient } from '@angular/common/http'

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor(private http : HttpClient) {}
    
         getFlagsFromApi(): Observable<any> {
         let data = this.http.get<any>("https://currencyexchange-wbtr.onrender.com/images");
          return data;
        }
}
