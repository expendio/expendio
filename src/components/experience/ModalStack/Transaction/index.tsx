import React, { FunctionComponent, useState } from 'react';
import Colors from 'styles/colors';
import { TransactionType } from 'models/transactions';
import { useModalStackActions } from 'components/providers/ModalStackProvider';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import Modal from 'components/experience/Modal';
import { ModalList } from 'components/experience/ModalStack';
import { accounts } from 'components/pages/Accounts/records';
import { resolveNextAmount } from './utils';
import { Actions, Body, DetailsButton, RecordButton } from './styled/modal';
import TypeSelector from './TypeSelector';
import Options from './Options';
import AmountBox from './AmountBox';
import Keyboard from './Keyboard';
import { Vibrations } from '../../../../helpers';

const TransactionModal: FunctionComponent = () => {
  const { pushModal, popModal } = useModalStackActions();
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState({ id: 1, name: 'CUP' });
  const [type, setType] = useState<TransactionType>(TransactionType.Expense);
  const [source, setSource] = useState(accounts[0]);

  const handleKeyStroke = (key: string) => {
    setAmount(resolveNextAmount(amount, key));
  };

  const openDetails = () => {
    Vibrations.buttonTouch();
    pushModal({
      name: ModalList.TRANSACTION_DETAILS,
      props: {
        transaction: {
          label: '',
          date: new Date(),
        },
      },
    });
  };

  return (
    <Modal isOpen title="Record Transaction" onClose={popModal}>
      <Body>
        <TypeSelector type={type} onChange={setType} />
        <Options type={type} source={source} onSourceChange={setSource} />
        <AmountBox
          type={type}
          amount={amount}
          currency={currency}
          setCurrency={setCurrency}
        />
      </Body>
      <Keyboard onKeyStroke={handleKeyStroke} />
      <Actions>
        <RecordButton>
          <span>Record</span>
          <SvgIcon icon={Icons.CHEVRON_RIGHT} color={Colors.WHITE} />
        </RecordButton>
        <DetailsButton onClick={openDetails}>
          <SvgIcon icon={Icons.FORM} color={Colors.WHITE} />
        </DetailsButton>
      </Actions>
    </Modal>
  );
};

export default TransactionModal;
