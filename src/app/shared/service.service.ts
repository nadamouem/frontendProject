import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  public getProducts(){
  this.http
  .get('https://www.exchangerate-api.com/docs/standard-requests')
  .subscribe((respone)=>console.log(respone));
}
}
