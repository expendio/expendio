import React, { FunctionComponent } from 'react';
import { StyledTypeSelector, TypeButton } from './styled/type-selector';
import { TransactionType } from 'models/transactions';
import { Vibrations } from 'helpers';

interface Props {
  type: TransactionType;
  onChange: (type) => void;
}

const TypeSelector: FunctionComponent<Props> = (props) => {
  const { type, onChange } = props;

  const handleTypeChange = (event) => {
    Vibrations.buttonTouch();
    onChange(parseInt(event.target.dataset.type, 10));
  };

  return (
    <StyledTypeSelector>
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
    </StyledTypeSelector>
  );
};

export default TypeSelector;
