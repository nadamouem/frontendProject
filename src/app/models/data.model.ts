export interface CurrencyCardModel {
  imgURL: string;
  countryTitle: string;
  currencyTitle: string;
  rate: number;
  checked: boolean;
}

export interface CurrencyFlag {
  currency: string;
  flag: string;
  checked: boolean;
}
export interface rate {
  baseCurrency:string,
  targets:targets[]
}

export interface targets{
      currency: string,
      exchangeRate: string,
      flag: string
}
