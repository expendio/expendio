import React, { FunctionComponent, useEffect, useState } from 'react';
import { formatCurrency } from 'helpers';
import Colors from 'styles/colors';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import Modal from 'components/experience/Modal';
import resolveNextAmount from './utils/resolve-next-amount';
import { Amount, AmountBox, Body, RecordButton, RecordLabel, TypeButton, TypeSelector } from './styled/modal';
import Keyboard from './Keyboard';
import CurrencyBox from './CurrencyBox';
import { TransactionType } from '../../../models/transactions';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const TransactionModal: FunctionComponent<Props> = (props) => {
  const { isOpen, onClose } = props;
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState({ id: 1, name: 'CUP' });
  const [type, setType] = useState<TransactionType>(TransactionType.Income);

  useEffect(() => {
    setAmount('');
  }, [isOpen]);

  const handleKeyStroke = (key: string) => {
    setAmount(resolveNextAmount(amount, key));
  };

  return (
    <Modal isOpen={isOpen} title="Record Transaction" onClose={onClose}>
      <Body>
        <TypeSelector>
          <TypeButton
            selected={type === TransactionType.Income}
            onClick={() => setType(TransactionType.Income)}
          >
            Income
          </TypeButton>
          <TypeButton
            selected={type === TransactionType.Expense}
            onClick={() => setType(TransactionType.Expense)}
          >
            Expense
          </TypeButton>
          <TypeButton
            selected={type === TransactionType.Transfer}
            onClick={() => setType(TransactionType.Transfer)}
          >
            Transfer
          </TypeButton>
        </TypeSelector>
        <AmountBox>
          <Amount>
            {formatCurrency(amount)}
          </Amount>
          <CurrencyBox active={currency} onChange={setCurrency} />
        </AmountBox>
      </Body>
      <Keyboard onKeyStroke={handleKeyStroke} />
      <RecordButton>
        <RecordLabel>Record</RecordLabel>
        <SvgIcon icon={Icons.CHEVRON_RIGHT} color={Colors.WHITE} />
      </RecordButton>
    </Modal>
  );
};

export default TransactionModal;
