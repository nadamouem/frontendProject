import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import { flagCountry } from '../data/data.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { compare } from '../shared/interfaces/compare.model';

@Component({
  selector: 'app-comparing',
  templateUrl: './comparing.component.html',
  styleUrls: ['./comparing.component.css'],
})
export class ComparingComponent {
  @Input() cardsList!: flagCountry[];
  @Input() imgURL: string = '';

  status: string = '';
  basiccurrancy!: number;
  frisrttargetcurrancy!: number;
  secondtargetcurrancy!: number;
  selectedCurrancy!: flagCountry;
  targetCurrancyOne!: flagCountry;
  targetCurrancytwo!: flagCountry;
  resultTargetOne:number=0;
  resultTargetTwo:number=0;

  selectItems: any;
  compareResult!: compare;

  constructor(private serviceService: ServiceService) {
    this.getData();
  }
  onCompare() {
    console.log('compare');
    this.status = 'compare';
  }
  onConvert() {
    this.status = 'convert';
  }

  getData() {
    this.serviceService.getCurrencyData().subscribe((res) => {
      this.selectItems = res;
    });
  }
  getCompareData() {
    this.serviceService
      .getcompareRate(
        this.selectedCurrancy.currency,
        this.targetCurrancyOne.currency,
        this.targetCurrancytwo.currency,
        this.basiccurrancy
      )
      .subscribe((result) => {
        this.compareResult = result;
        this.resultTargetOne=(+(+result.firstConversionValue).toFixed(2));
        this.resultTargetTwo=(+(+result.secondConversionValue).toFixed(2));
        console.log(result);
      });
  }

  isDropdownOpen = false;
  @Output() selecteddCurrency = new EventEmitter();
  selectedCurrency: string = '';
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  test() {
    console.log(this.selectedCurrancy);
  }
}
