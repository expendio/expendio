import React, { FunctionComponent } from 'react';
import { formatCurrency } from 'helpers';
import { TransactionType } from 'models/transactions';
import { StyledAmountBox, Amount, Sign } from './styled/amount-box';
import { resolveSign } from './utils';
import CurrencyBox from './CurrencyBox';

interface Props {
  type: TransactionType;
  amount: string;
  currency: { id: number; name: string };
  setCurrency: (currency) => void;
}

const AmountBox: FunctionComponent<Props> = (props) => {
  const { type, amount, currency, setCurrency } = props;

  return (
    <StyledAmountBox>
      <Sign type={type}>{resolveSign(type)}</Sign>
      <Amount>
        {formatCurrency(amount)}
      </Amount>
      <CurrencyBox active={currency} onChange={setCurrency} />
    </StyledAmountBox>
  );
};

export default AmountBox;
