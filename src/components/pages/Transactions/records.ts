import faker from 'faker';
import { generateUID } from 'helpers';
import Colors from 'styles/colors';
import { TransactionModel, TransactionType } from 'models/transactions';
import { Icons } from 'components/base-components/SvgIcon/Icons';

export const transactions: TransactionModel[] = [
  {
    id: generateUID(),
    label: faker.lorem.words(3),
    type: TransactionType.Expense,
    amount: parseFloat(faker.finance.amount(5, 1000)),
    category: { name: faker.lorem.words(3), color: Colors.BRAND, icon: Icons.BELL },
    date: faker.date.recent(30),
  },
  {
    id: generateUID(),
    label: faker.lorem.words(3),
    type: TransactionType.Expense,
    amount: parseFloat(faker.finance.amount(5, 1000)),
    category: { name: faker.lorem.words(3), color: Colors.ACCENT, icon: Icons.BOOKMARK },
    date: faker.date.recent(30),
  },
  {
    id: generateUID(),
    label: faker.lorem.words(3),
    type: TransactionType.Income,
    amount: parseFloat(faker.finance.amount(5, 1000)),
    category: { name: faker.lorem.words(3), color: Colors.INFO, icon: Icons.MEGAPHONE },
    date: faker.date.recent(30),
  },
  {
    id: generateUID(),
    label: faker.lorem.words(3),
    type: TransactionType.Expense,
    amount: parseFloat(faker.finance.amount(5, 1000)),
    category: { name: faker.lorem.words(3), color: Colors.SUCCESS, icon: Icons.MEGAPHONE },
    date: faker.date.recent(30),
  },
  {
    id: generateUID(),
    label: faker.lorem.words(3),
    type: TransactionType.Income,
    amount: parseFloat(faker.finance.amount(5, 1000)),
    category: { name: faker.lorem.words(3), color: Colors.DARK, icon: Icons.BELL },
    date: faker.date.recent(30),
  },
  {
    id: generateUID(),
    label: faker.lorem.words(3),
    type: TransactionType.Expense,
    amount: parseFloat(faker.finance.amount(5, 1000)),
    category: { name: faker.lorem.words(3), color: Colors.ERROR, icon: Icons.CALENDAR_FILLED },
    date: faker.date.recent(30),
  },
];
