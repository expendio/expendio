import { CategoryModel } from './categories';

export enum TransactionType {
  Expense,
  Income,
  Transfer,
}

export interface TransactionModel {
  id: string;
  label: string;
  description?: string;
  amount: number;
  date: Date;
  type: TransactionType;
  category: CategoryModel;
}
