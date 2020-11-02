import { CurrencyModel } from './currencies';

interface AccountBalanceModel extends CurrencyModel {
  amount: number;
}

export interface AccountModel {
  id: string;
  name: string;
  color: string;
  balance: AccountBalanceModel[];
}
