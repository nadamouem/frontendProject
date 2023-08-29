import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {
  CurrencyCardModel,
  CurrencyFlag,
  rate,
} from 'src/app/models/data.model';
import { ServiceService } from '../../shared/service.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css'],
})
export class PortofolioComponent implements OnInit {
  @Input() favCarrency: CurrencyFlag[] = [];
  showFav = false;
  // favRate!:rate;
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    if (this.favCarrency.length === 0) {
      this.favCarrency = JSON.parse(localStorage.getItem('currencies') || '[]');
      // let target:string;
      // for (let i = 0; i <= this.favCarrency.length - 1;  i++) {
      //   target=this.favCarrency[i].currency
      //   this.favCarrency
      // }

      // this.service.getrate()
    }
  }
  
  getRate(target: string): Observable<string> {
    return this.service.getrate(target).pipe(
      map((Response) => {
        console.log(
          '------------------------------------------------------------'
        );
        console.log(Response);
        console.log(
          '------------------------------------------------------------'
        );
        return Response.targets[0].exchangeRate;
      })
    );
  }
}
