
import { ConvertComponentComponent } from './convert.component/convert.component.component';
import { CompareComponentComponent } from './compare.component/compare.component.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    CompareComponentComponent,
    ConvertComponentComponent
  ],
  imports: [CommonModule],
})
export class CurrenyModule {}
