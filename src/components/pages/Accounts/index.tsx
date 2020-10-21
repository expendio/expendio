import React, { FunctionComponent } from 'react';
import Button from 'components/base-components/Button';
import AccountList from 'components/experience/AccountsList';
import { StyledAccounts, Header, HeaderLabel } from './styled/page';
import { accounts } from './records';

const AccountsPage: FunctionComponent = () => (
  <StyledAccounts>
    <Header>
      <HeaderLabel>Accounts</HeaderLabel>
      <Button
        onClick={() => undefined}
        label="Create New"
        variant="base"
        sm
      />
    </Header>
    <AccountList accounts={accounts} />
  </StyledAccounts>
);

export default AccountsPage;
