import { ConvertComponentComponent } from './convert.component/convert.component.component';
import { CompareComponentComponent } from './compare.component/compare.component.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetRatePipe } from './portofolio/get-rate.pipe';

@NgModule({
  declarations: [CompareComponentComponent, ConvertComponentComponent],
  imports: [CommonModule],
})
export class CurrenyModule {}
