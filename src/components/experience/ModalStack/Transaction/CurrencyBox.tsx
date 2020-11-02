import React, { FunctionComponent } from 'react';
import { Vibrations } from 'helpers';
import { StyledCurrencyBox, Currency } from './styled/currency-box';

interface Props {
  active: any;
  onChange: (currency) => void;
}

const currencies = [
  { id: 1, name: 'CUP' },
  { id: 2, name: 'CUC' },
  { id: 3, name: 'USD' },
];

const CurrencyBox: FunctionComponent<Props> = (props) => {
  const { active, onChange } = props;

  const handleCurrencyChange = () => {
    Vibrations.buttonTouch();
    const currentSelectedIndex = currencies.findIndex((c) => c.id === active.id);
    onChange(currencies[currentSelectedIndex === 2 ? 0 : currentSelectedIndex + 1]);
  };

  return (
    <StyledCurrencyBox onClick={handleCurrencyChange}>
      <Currency>{active.name}</Currency>
    </StyledCurrencyBox>
  );
};

export default CurrencyBox;
