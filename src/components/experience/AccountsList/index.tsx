import React, { FunctionComponent, useMemo } from 'react';
import { AccountModel } from 'models/accounts';

import { StyledList } from './styled/list';
import Account from './Account';

interface Props {
  accounts: AccountModel[];
}

const AccountList: FunctionComponent<Props> = (props) => {
  const { accounts } = props;
  const records = useMemo(() => accounts.map(
    (ac) => <Account key={ac.id} {...ac} />,
  ), [accounts]);

  return (
    <StyledList>
      {records}
    </StyledList>
  );
};

export default AccountList;
