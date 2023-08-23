;
import { FavouritsComponent } from './favourits/favourits.component';
import { ConvertComponentComponent } from './convert.component/convert.component.component';
import { CompareComponentComponent } from './compare.component/compare.component.component'import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import{}



@NgModule({
  declarations: [
    CompareComponentComponent,
    ConvertComponentComponent,
    FavouritsComponent
  ],
  imports: [
    CommonModule,
  ServiceService,
  ]
})
export class CurrenyModule { 
  curreny:any[]=[]
  constructor(private service:ServiceService){

  }
}
