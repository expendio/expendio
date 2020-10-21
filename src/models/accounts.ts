import { CurrencyModel } from './currencies';

export interface AccountModel {
  id: string;
  name: string;
  color: string;
  balance: CurrencyModel[];
}
