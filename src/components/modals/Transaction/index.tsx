import React, { FunctionComponent, useEffect, useState } from 'react';
import { formatCurrency } from 'helpers';
import Colors from 'styles/colors';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import Modal from 'components/experience/Modal';
import { Body, AmountBox, Amount, RecordButton, RecordLabel } from './styled/modal';
import Keyboard from './Keyboard';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const TransactionModal: FunctionComponent<Props> = (props) => {
  const { isOpen, onClose } = props;
  const [amount, setAmount] = useState('');

  useEffect(() => {
    setAmount('');
  }, [isOpen]);

  const handleKeyStroke = (key: string) => {
    if (key === 'DELETE') {
      setAmount(amount.slice(0, -1));
      return;
    }

    setAmount(`${amount}${key}`);
  };

  return (
    <Modal isOpen={isOpen} title="Record Transaction" onClose={onClose}>
      <Body>
        <AmountBox>
          <Amount>
            {formatCurrency(amount)}
          </Amount>
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
