import React, { FunctionComponent, useEffect, useState } from 'react';
import Colors from 'styles/colors';
import { TransactionType } from 'models/transactions';
import { formatCurrency, Vibrations } from 'helpers';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import Modal from 'components/experience/Modal';
import { resolveNextAmount, resolveSign } from './utils';
import {
  Amount,
  AmountBox,
  Body,
  RecordButton,
  RecordLabel,
  Sign,
  TypeButton,
  TypeSelector,
  Options,
  Option,
  OptionLabel,
  OptionValue,
} from './styled/modal';
import Keyboard from './Keyboard';
import CurrencyBox from './CurrencyBox';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const TransactionModal: FunctionComponent<Props> = (props) => {
  const { isOpen, onClose } = props;
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState({ id: 1, name: 'CUP' });
  const [type, setType] = useState<TransactionType>(TransactionType.Expense);

  useEffect(() => {
    setAmount('');
  }, [isOpen]);

  const handleKeyStroke = (key: string) => {
    setAmount(resolveNextAmount(amount, key));
  };

  const handleTypeChange = (event) => {
    Vibrations.buttonTouch();
    setType(parseInt(event.target.dataset.type, 10));
  };

  return (
    <Modal isOpen={isOpen} title="Record Transaction" onClose={onClose}>
      <Body>
        <TypeSelector>
          <TypeButton
            data-type={TransactionType.Income}
            selected={type === TransactionType.Income}
            onClick={handleTypeChange}
          >
            Income
          </TypeButton>
          <TypeButton
            data-type={TransactionType.Expense}
            selected={type === TransactionType.Expense}
            onClick={handleTypeChange}
          >
            Expense
          </TypeButton>
          <TypeButton
            data-type={TransactionType.Transfer}
            selected={type === TransactionType.Transfer}
            onClick={handleTypeChange}
          >
            Transfer
          </TypeButton>
        </TypeSelector>
        <Options>
          <Option>
            <OptionLabel>Account</OptionLabel>
            <OptionValue>Wallet</OptionValue>
          </Option>
          <Option>
            <OptionLabel>Category</OptionLabel>
            <OptionValue>Clothes</OptionValue>
          </Option>
        </Options>
        <AmountBox>
          <Sign type={type}>{resolveSign(type)}</Sign>
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
