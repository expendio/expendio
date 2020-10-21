import React, { FunctionComponent, useMemo } from 'react';
import { StyledAccount, Name, Currencies, Currency } from './styled/accounts';

interface Props {
  name: string;
  color: string;
  balance: { name: string; amount: number }[];
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const Account: FunctionComponent<Props> = (props) => {
  const { name, balance, color } = props;
  const currencies = useMemo(() => balance.map(
    (c) => (
      <Currency key={c.name}>
        {`${c.name}: ${currencyFormatter.format(c.amount)}`}
      </Currency>
    ),
  ), [balance]);

  return (
    <StyledAccount color={color}>
      <Name>{name}</Name>
      <Currencies>{currencies}</Currencies>
    </StyledAccount>
  );
};

export default Account;
