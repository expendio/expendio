import React, { FunctionComponent, useMemo } from 'react';
import { StyledList } from './styled/list';
import { TransactionModel } from '../../../models/transactions';
import Transaction from './Transaction';

interface Props {
  transactions: TransactionModel[];
  showAsGroups?: boolean;
}

const TransactionsList: FunctionComponent<Props> = (props) => {
  const { transactions } = props;

  const records = useMemo(() => transactions.map(
    (tr) => <Transaction key={tr.id} {...tr} />,
  ), [transactions]);

  return (
    <StyledList>
      {records}
    </StyledList>
  );
};

export default TransactionsList;
