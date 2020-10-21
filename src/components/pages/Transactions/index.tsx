import React, { FunctionComponent } from 'react';
import TransactionsList from 'components/experience/TransactionsList';
import Button from 'components/base-components/Button';
import { StyledTransactions, Header, HeaderLabel } from './styled/page';
import { transactions } from './records';

const TransactionsPage: FunctionComponent = () => (
  <StyledTransactions>
    <Header>
      <HeaderLabel>Transactions</HeaderLabel>
      <Button
        onClick={() => undefined}
        label="Create New"
        variant="base"
        sm
      />
    </Header>
    <TransactionsList transactions={transactions} />
  </StyledTransactions>
);

export default TransactionsPage;
