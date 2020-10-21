import faker from 'faker';
import { generateUID } from 'helpers';
import Colors from 'styles/colors';
import { TransactionModel, TransactionType } from '../../../models/transactions';
import { Icons } from '../../base-components/SvgIcon/Icons';

export const accounts = [
  {
    id: generateUID(),
    color: Colors.BRAND,
    name: 'Wallet',
    balance: [
      { name: 'CUC', amount: parseFloat(faker.finance.amount(10, 1000)) },
      { name: 'CUP', amount: parseFloat(faker.finance.amount(10, 1000)) },
      { name: 'USD', amount: parseFloat(faker.finance.amount(10, 1000)) },
    ],
  },
];

export const transactions: TransactionModel[] = [
  {
    id: generateUID(),
    label: faker.lorem.words(3),
    type: TransactionType.Expense,
    amount: parseFloat(faker.finance.amount(5, 1000)),
    category: { name: faker.lorem.words(3), color: Colors.BRAND, icon: Icons.BELL },
    date: faker.date.recent(0),
  },
  {
    id: generateUID(),
    label: faker.lorem.words(3),
    type: TransactionType.Expense,
    amount: parseFloat(faker.finance.amount(5, 1000)),
    category: { name: faker.lorem.words(3), color: Colors.ACCENT, icon: Icons.BOOKMARK },
    date: faker.date.recent(0),
  },
  {
    id: generateUID(),
    label: faker.lorem.words(3),
    type: TransactionType.Income,
    amount: parseFloat(faker.finance.amount(5, 1000)),
    category: { name: faker.lorem.words(3), color: Colors.INFO, icon: Icons.MEGAPHONE },
    date: faker.date.recent(0),
  },
  {
    id: generateUID(),
    label: faker.lorem.words(3),
    type: TransactionType.Expense,
    amount: parseFloat(faker.finance.amount(5, 1000)),
    category: { name: faker.lorem.words(3), color: Colors.SUCCESS, icon: Icons.MEGAPHONE },
    date: faker.date.recent(0),
  },
];
