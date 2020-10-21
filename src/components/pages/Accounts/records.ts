import faker from 'faker';
import { generateUID } from 'helpers';
import Colors from 'styles/colors';

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
  {
    id: generateUID(),
    color: Colors.INFO,
    name: 'Checking',
    balance: [
      { name: 'CUC', amount: parseFloat(faker.finance.amount(10, 1000)) },
      { name: 'CUP', amount: parseFloat(faker.finance.amount(10, 1000)) },
      { name: 'USD', amount: parseFloat(faker.finance.amount(10, 1000)) },
    ],
  },
  {
    id: generateUID(),
    color: Colors.INFO,
    name: 'Savings',
    balance: [
      { name: 'CUC', amount: parseFloat(faker.finance.amount(10, 1000)) },
      { name: 'CUP', amount: parseFloat(faker.finance.amount(10, 1000)) },
      { name: 'USD', amount: parseFloat(faker.finance.amount(10, 1000)) },
    ],
  },
];
