import { TransactionType } from '../../../../models/transactions';

export function resolveSign(type: TransactionType) {
  switch (type) {
    case TransactionType.Expense:
      return '-';
    case TransactionType.Income:
      return '+';
    default:
      return '';
  }
}
