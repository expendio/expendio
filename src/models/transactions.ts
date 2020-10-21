import { CategoryModel } from './categories';

export enum TransactionType {
  Expense,
  Income,
}

export interface TransactionModel {
  id: string;
  label: string;
  amount: number;
  date: Date;
  type: TransactionType;
  category: CategoryModel;
}
