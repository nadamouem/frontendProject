import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FavouritsComponent } from './favourits/favourits.component';
import { HttpClientModule } from '@angular/common/http';
import { RateCardComponent } from './shared/rate-card/rate-card.component';
// import { ComponentComponent } from './component/component.component';

@NgModule({
  declarations: [AppComponent, RateCardComponent, FavouritsComponent, ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
