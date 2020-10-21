import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router';
import { Icons } from 'components/base-components/SvgIcon';
import Button from 'components/base-components/Button';
import TransactionsList from 'components/experience/TransactionsList';

import { accounts, transactions } from './records';
import { Header, HeaderLabel, HeaderText, StyledHome } from './styled/page';
import AccountList from '../../experience/AccountsList';

const HomePage: FunctionComponent = () => {
  const history = useHistory();

  const goToAccounts = () => history.push('/accounts');
  const goToTransactions = () => history.push('/transactions');

  return (
    <StyledHome>
      <Header>
        <HeaderLabel>Main Account</HeaderLabel>
        <Button
          rightIcon={Icons.CHEVRON_RIGHT}
          onClick={goToAccounts}
          label="See all"
          color="dark"
          sm
        />
      </Header>
      <AccountList accounts={accounts} />
      <Header>
        <HeaderText>
          <HeaderLabel>Recent</HeaderLabel>
          <HeaderLabel>Transactions</HeaderLabel>
        </HeaderText>
        <Button
          rightIcon={Icons.CHEVRON_RIGHT}
          onClick={goToTransactions}
          label="See all"
          color="dark"
          sm
        />
      </Header>
      <TransactionsList transactions={transactions} />
    </StyledHome>
  );
};

export default HomePage;
