import React, { FunctionComponent, useMemo } from 'react';
import { ModalEntry, useModals } from 'components/providers/ModalStackProvider';
import TransactionModal from './Transaction';
import TransactionDetailsModal from './TransactionDetails';
import SelectAccountModal from './SelectAccount';

export enum ModalList {
  TRANSACTION = 'TRANSACTION',
  TRANSACTION_DETAILS = 'TRANSACTION_DETAILS',
  SELECT_ACCOUNTS = 'SELECT_ACCOUNTS',
}

const ModalMap = {
  TRANSACTION: TransactionModal,
  TRANSACTION_DETAILS: TransactionDetailsModal,
  SELECT_ACCOUNTS: SelectAccountModal,
};

function mapModalsToComponents(modal: ModalEntry) {
  const { name, props } = modal;
  const Component = ModalMap[name];

  return (
    <Component key={name} {...props as any} />
  );
}

const ModalStack: FunctionComponent = () => {
  const activeModals = useModals();
  const modalComponents = useMemo(
    () => activeModals.map(mapModalsToComponents),
    [activeModals],
  );

  return (
    <>
      {modalComponents}
    </>
  );
};

export default ModalStack;
