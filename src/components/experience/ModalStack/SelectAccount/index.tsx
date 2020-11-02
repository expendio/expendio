import React, { FunctionComponent } from 'react';
import { AccountModel } from 'models/accounts';
import { useModalStackActions } from 'components/providers/ModalStackProvider';
import Modal from 'components/experience/Modal';
import AccountList from 'components/experience/AccountsList';
import { accounts } from 'components/pages/Accounts/records';
import { Body } from './styled/modal';
import { Vibrations } from '../../../../helpers';

interface Props {
  selectedAccount: AccountModel;
  onSelect: (account: AccountModel) => void;
}

const SelectAccountModal: FunctionComponent<Props> = (props) => {
  const { selectedAccount, onSelect } = props;
  const { popModal } = useModalStackActions();

  const handleAccountSelected = (account) => {
    Vibrations.buttonTouch();
    onSelect(account);
    popModal();
  };

  return (
    <Modal isOpen title="Select Account" onClose={popModal}>
      <Body>
        <AccountList
          accounts={accounts}
          selectedAccount={selectedAccount}
          onSelect={handleAccountSelected}
        />
      </Body>
    </Modal>
  );
};

export default SelectAccountModal;
