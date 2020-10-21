import React, { FunctionComponent } from 'react';
import { formatCurrency } from 'helpers';
import { TransactionModel, TransactionType } from 'models/transactions';
import SvgIcon from 'components/base-components/SvgIcon';
import {
  Amount,
  Category,
  Content,
  DateLabel,
  Label,
  Sign,
  StyledTransaction,
} from './styled/transaction';

const dateFormatter = new Intl.DateTimeFormat('default', {
  day: 'numeric',
  month: 'short',
  hour12: true,
  hour: 'numeric',
  minute: 'numeric',
});

const Transaction: FunctionComponent<TransactionModel> = (props) => {
  const {
    label,
    date,
    type,
    amount,
    category: {
      icon,
      color,
    },
  } = props;

  return (
    <StyledTransaction isIncome={type === TransactionType.Income}>
      <Category color={color}>
        <SvgIcon icon={icon} color={color} size="large" />
      </Category>
      <Content>
        <Label>{label}</Label>
        <DateLabel>{dateFormatter.format(date)}</DateLabel>
      </Content>
      <Sign type={type}>{type === TransactionType.Expense ? '-' : '+'}</Sign>
      <Amount>{formatCurrency(amount)}</Amount>
    </StyledTransaction>
  );
};

export default Transaction;
