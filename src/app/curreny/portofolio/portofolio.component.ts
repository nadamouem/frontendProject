import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CurrencyCardModel, CurrencyFlag } from 'src/app/models/data.model';
import{ServiceService} from  '../../shared/service.service'
@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})

export class PortofolioComponent implements OnInit {
@Input() favCarrency:CurrencyFlag[]=[];
  
  constructor( ) {}

  ngOnInit(): void {
   if(this.favCarrency.length === 0){
    this.favCarrency = JSON.parse(localStorage.getItem('currencies') || '[]');
   }
  }
}
