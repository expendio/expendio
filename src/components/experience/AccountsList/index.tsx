import React, { FunctionComponent, useMemo } from 'react';
import { AccountModel } from 'models/accounts';

import { StyledList } from './styled/list';
import Account from './Account';

interface Props {
  accounts: AccountModel[];
  selectedAccount?: AccountModel;
  onSelect?: (account: AccountModel) => void;
}

const AccountList: FunctionComponent<Props> = (props) => {
  const { accounts, selectedAccount, onSelect } = props;
  const records = useMemo(() => accounts.map(
    (ac) => (
      <Account
        key={ac.id}
        onClick={() => onSelect(ac)}
        isSelected={ac.id === selectedAccount?.id}
        {...ac}
      />
    ),
  ), [accounts]);

  return (
    <StyledList>
      {records}
    </StyledList>
  );
};

export default AccountList;
